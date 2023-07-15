import 'package:flutter/material.dart';
// import 'score_screen.dart';

class Question {
  late String txt;
  late bool ans;

  Question({required this.txt, required this.ans});
}

class QuestionBank {
  int idx = 0;

  List<Question> _myQuestionBank = [
    Question(txt: 'Flutter is a mobile development framework.', ans: true),
    Question(txt: 'Dart is the programming language used in Flutter.', ans: true),
    Question(txt: 'Flutter is developed by Microsoft.', ans: false),
    Question(txt: 'React Native is a competitor to Flutter.', ans: true),
    Question(txt: 'Flutter can only be used to build Android apps.', ans: false),
  ];

  Question getMyQuestion() {
    return _myQuestionBank[idx];
  }

  void move() {
    if (idx >= _myQuestionBank.length - 1) {
      idx = 0;
    } else {
      idx++;
    }
  }

  bool isLastQuestion() {
    return idx >= _myQuestionBank.length - 1;
  }
}

class QuizScreen extends StatefulWidget {
  const QuizScreen({Key? key}) : super(key: key);

  @override
  State<QuizScreen> createState() => _QuizScreenState();
}

class _QuizScreenState extends State<QuizScreen> {
  QuestionBank qbank = QuestionBank();
  int score = 0;
  bool showScoreButton = false;

  void answerQuestion(bool answer) {
    setState(() {
      if (answer == qbank.getMyQuestion().ans) {
        score++;
      }
      if (qbank.isLastQuestion()) {
        showScoreButton = true;
      } else {
        qbank.move();
      }
    });
  }

  void navigateToScoreScreen() {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => ScoreScreen(score: score),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Quiz App'),
        centerTitle: true,
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Expanded(
              flex: 3,
              child: Card(
                elevation: 2.0,
                child: Padding(
                  padding: EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Question:',
                        style: TextStyle(
                          fontSize: 18.0,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      SizedBox(height: 8.0),
                      Text(
                        qbank.getMyQuestion().txt,
                        style: TextStyle(fontSize: 16.0),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            SizedBox(height: 16.0),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Expanded(
                  child: ElevatedButton(
                    onPressed: () {
                      answerQuestion(true); // Answer true
                    },
                    child: Text('True'),
                    style: ElevatedButton.styleFrom(
                      primary: Colors.green,
                    ),
                  ),
                ),
                SizedBox(width: 16.0),
                Expanded(
                  child: ElevatedButton(
                    onPressed: () {
                      answerQuestion(false); // Answer false
                    },
                    child: Text('False'),
                    style: ElevatedButton.styleFrom(
                      primary: Colors.red,
                    ),
                  ),
                ),
              ],
            ),
            SizedBox(height: 16.0),
            if (showScoreButton)
              ElevatedButton(
                onPressed: navigateToScoreScreen,
                child: Text('Show Score'),
                style: ElevatedButton.styleFrom(
                  primary: Colors.blue,
                ),
              ),
          ],
        ),
      ),
    );
  }
}

class ScoreScreen extends StatelessWidget {
  final int score;

  ScoreScreen({required this.score});

  String getScoreMessage() {
    if (score >= 3) {
      return 'Success';
    } else {
      return 'Fail';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Quiz Score'),
        centerTitle: true,
      ),
      body: Center(
        child: Padding(
          padding: EdgeInsets.all(16.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Quiz Completed!',
                style: TextStyle(
                  fontSize: 24.0,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 16.0),
              Text(
                'Your Score: $score',
                style: TextStyle(fontSize: 18.0),
              ),
              SizedBox(height: 16.0),
              Text(
                getScoreMessage(),
                style: TextStyle(
                  fontSize: 24.0,
                  fontWeight: FontWeight.bold,
                  color: score >= 3 ? Colors.green : Colors.red,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
