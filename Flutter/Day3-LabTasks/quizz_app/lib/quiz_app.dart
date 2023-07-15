import 'package:flutter/material.dart';
import 'quiz_screen.dart';

class QuizApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Quiz App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: QuizScreen(),
      debugShowCheckedModeBanner: false
    );
  }
}
