// ignore_for_file: avoid_print, camel_case_types

import 'package:flutter_app_sastreria/models/Orden.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:async';

bool tonoColor = false;

class missing_orders extends StatelessWidget {
  const missing_orders({Key? key}) : super(key: key);

  Future<List<Orden>> _selectOrdersByWeek() async {
    DateTime ahora = DateTime.now();
    String fechaHoy = ahora.year.toString() +
        '/' +
        ahora.month.toString() +
        '/' +
        ahora.day.toString();

    print(fechaHoy);
    var queryParameters = {
      'fechaActual': fechaHoy,
    };

    // String url = 'http://192.168.1.3:4500/api/selectpendingordersbyweek';
    var uri = Uri.http(
        '192.168.1.3:4500', '/api/selectpendingordersbyweek', queryParameters);
    final response = await http.get(uri);
    List<Orden> ordenesSemana = [];

    if (response.statusCode == 200) {
      String strData = utf8.decode(response.bodyBytes);
      final jsonData = jsonDecode(strData);
      List elementos = jsonData['ordenesPendientesSemana'];

      for (var i = 0; i < elementos.length; i++) {
        ordenesSemana.add(Orden(
            numeroOrden: elementos[i]["Id"],
            cliente: elementos[i]["NombreCompleto"],
            diaEntrega: elementos[i]["Dia"],
            fechaEntrega: elementos[i]["FechaEntrega"]));
      }

      // print(articulos);
      return ordenesSemana;
    } else {
      throw Exception("Connection failed");
    }
  }

  @override
  Widget build(BuildContext context) {
    Future<List<Orden>> ordenesPendientes = _selectOrdersByWeek();
    return Scaffold(
        appBar: AppBar(
          title: const Text('Lista de Órdenes Pendientes'),
          backgroundColor: Colors.green.shade200,
        ),
        body: FutureBuilder(
          future: ordenesPendientes,
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              return ListView(
                children: _buildItem(snapshot.data),
              );
            } else if (snapshot.hasError) {
              print(snapshot.error);
              return const Text("Error");
            }
            return const Center(
              child: CircularProgressIndicator(),
            );
          },
        ));
  }
}

List<Widget> _buildItem(ordenes) {
  List<Widget> ordenesPendientes = [];
  Color colorLinea;

  for (var orden in ordenes) {
    tonoColor = !tonoColor;

    if (tonoColor) {
      colorLinea = Colors.green.shade100;
    } else {
      colorLinea = Colors.green.shade300;
    }

    ordenesPendientes.add(ListTile(
      title: Text(orden.numeroOrden.toString()),
      subtitle: Column(children: <Widget>[
        Text('Cliente: ${orden.cliente}',
            style: const TextStyle(fontWeight: FontWeight.bold)),
        Text('Fecha de Entrega: ${orden.diaEntrega} ${orden.fechaEntrega}',
            style: const TextStyle(fontWeight: FontWeight.bold)),
      ]),
      tileColor: colorLinea,
      leading: const Icon(Icons.receipt_long_outlined),
      contentPadding:
          const EdgeInsets.symmetric(vertical: 5.0, horizontal: 10.0),
      onTap: () {
        print(orden.numeroOrden);
      },
    ));
  }

  return ordenesPendientes;
}

// Widget _buildItem(Orden orden) {
//   Color colorLinea;

//   tonoColor = !tonoColor;

//   if (tonoColor) {
//     colorLinea = Colors.green.shade100;
//   } else {
//     colorLinea = Colors.green.shade300;
//   }

//   return ListTile(
//     title: Text(orden.numeroOrden.toString()),
//     subtitle: Column(children: <Widget>[
//       Text('Cliente: ${orden.cliente}',
//           style: TextStyle(fontWeight: FontWeight.bold)),
//       Text('Fecha: ${orden.fechaEntrega}',
//           style: TextStyle(fontWeight: FontWeight.bold)),
//     ]),
//     tileColor: colorLinea,
//     leading: const Icon(Icons.receipt_long_outlined),
//     contentPadding: const EdgeInsets.symmetric(vertical: 5.0, horizontal: 10.0),
//     onTap: () {
//       print(orden.numeroOrden);
//     },
//   );
// }
