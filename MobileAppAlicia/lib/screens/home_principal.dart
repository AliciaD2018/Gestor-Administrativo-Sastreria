// ignore_for_file: avoid_print, unnecessary_new

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
      backgroundColor: Color.fromARGB(255, 255, 255, 255),
      body: Center(
        child: Column(
          children: <Widget>[
            Title(
                color: const Color.fromARGB(255, 233, 22, 22),
                child: const Text('Aplicación movil - Consultas',
                    style: TextStyle(
                        fontWeight: FontWeight.bold,
                        height: 5,
                        fontSize: 20,
                        fontStyle: FontStyle.italic))),

            RaisedButton(
                child: const Text('Lista de Materiales Faltantes'),
                color: Colors.blue.shade100,
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

            Row(
    
              children: [
                new Expanded(
                  child: new Image.asset('image/portadasastre.png'),
                ),
              ],
            ),
            
          ],
        ),
      ),
    );
  }
}
