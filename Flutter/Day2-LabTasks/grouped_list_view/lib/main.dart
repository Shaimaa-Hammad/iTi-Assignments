import 'package:flutter/material.dart';

class GroupMember {
  final String name;
  final IconData icon;

  GroupMember({required this.name, required this.icon});
}

class GroupedListView extends StatelessWidget {
  final List<List<GroupMember>> groups;

  const GroupedListView({required this.groups});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: ListView.builder(
        itemCount: groups.length,
        itemBuilder: (context, groupIndex) {
          String groupName = "";
          if (groupIndex == 0) {
            groupName = "Team A";
          } else if (groupIndex == 1) {
            groupName = "Team B";
          }
           else if (groupIndex == 2) {
            groupName = "Team C";
          }

          return Column(
            children: <Widget>[
              // Group header
              ListTile(
                title: Center(
                  child: Text(
                    groupName,
                    style: const TextStyle(
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ),
              // Group members
              ListView.builder(
                shrinkWrap: true,
                physics: const ClampingScrollPhysics(),
                itemCount: groups[groupIndex].length,
                itemBuilder: (context, memberIndex) {
                  GroupMember member = groups[groupIndex][memberIndex];
                  return Card(
                    elevation: 2.0,
                    shadowColor: Colors.grey,
                    child: ListTile(
                      leading: Icon(member.icon),
                      title: Center(child: Text(member.name)),
                      trailing: const Icon(Icons.arrow_forward),
                      onTap: () {
                        // Handle member tapped
                      },
                    ),
                  );
                },
              ),
            ],
          );
        },
      ),
    );
  }
}

void main() {
  List<List<GroupMember>> groups = [
    [
      GroupMember(name: "John", icon: Icons.person),
      GroupMember(name: "Bith", icon: Icons.person),
    ],
    [
      GroupMember(name: "Will", icon: Icons.person),
      GroupMember(name: "Miranda", icon: Icons.person),
    ],
    [
      GroupMember(name: "Mike", icon: Icons.person),
      GroupMember(name: "Danny", icon: Icons.person),
    ]
  ];

  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    title: "Grouped List View Example",
    home: Scaffold(
      appBar: AppBar(
        title: const Center(child: Text("Grouped List View")),
      ),
      body: GroupedListView(groups: groups),
    ),
  ));
}
