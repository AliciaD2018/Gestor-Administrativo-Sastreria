// @dart=2.9
import 'package:flutter/material.dart';
import 'package:flutter_app_sastreria/screens/home_principal.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  //const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
        title: 'Sastreria Lerhn',
        debugShowCheckedModeBanner: false,
        home: Home_Principal());
  }
}
