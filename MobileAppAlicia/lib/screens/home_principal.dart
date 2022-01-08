// ignore_for_file: avoid_print

import 'package:flutter/material.dart';
import 'package:flutter_app_sastreria/screens/lista_faltantes.dart';
// import 'package:flutter_app_sastreria/screens/lista_ordenes.dart';

// ignore: camel_case_types
class Home_Principal extends StatefulWidget {
  const Home_Principal({Key? key}) : super(key: key);

  @override
  _Home_PrincipalState createState() => _Home_PrincipalState();
}

// ignore: camel_case_types
class _Home_PrincipalState extends State<Home_Principal> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Sastreria Lehr'),
      ),
      backgroundColor: const Color.fromARGB(255, 211, 209, 209),
      body: Center(
        child: Column(
          children: <Widget>[
            const Text('.:....).'),
            RaisedButton(
                child: const Text('Lista de Materiales Faltantes'),
                onPressed: () => {
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => Lista_Faltantes()))
                    }),
            // RaisedButton(
            //     child: const Text('Lista Pendientes Semanal'),
            //     onPressed: () => {
            //           Navigator.push(
            //               context,
            //               MaterialPageRoute(
            //                   builder: (context) => const Lista_Ordenes()))
            //         })
          ],
        ),
      ),
    );
  }
}
