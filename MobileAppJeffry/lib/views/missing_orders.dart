// ignore_for_file: avoid_print

import 'package:flutter/material.dart';
import 'package:flutter_app_sastreria/models/Orden.dart';

bool tonoColor = false;

class missing_orders extends StatelessWidget {
  const missing_orders({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Lista de Órdenes Pendientes'),
        backgroundColor: Colors.green.shade200,
      ),
      body: ListView(
        children: ordenes.map(_buildItem).toList(),
      ),
    );
  }
}

Widget _buildItem(Orden orden) {
  Color colorLinea;

  tonoColor = !tonoColor;

  if (tonoColor) {
    colorLinea = Colors.green.shade100;
  } else {
    colorLinea = Colors.green.shade300;
  }

  return ListTile(
    title: Text(orden.numeroOrden.toString()),
    subtitle: Column(children: <Widget>[
      Text('Cliente: ${orden.cliente}',
          style: TextStyle(fontWeight: FontWeight.bold)),
      Text('Fecha: ${orden.fechaEntrega}',
          style: TextStyle(fontWeight: FontWeight.bold)),
    ]),
    tileColor: colorLinea,
    leading: const Icon(Icons.receipt_long_outlined),
    contentPadding: const EdgeInsets.symmetric(vertical: 5.0, horizontal: 10.0),
    onTap: () {
      print(orden.numeroOrden);
    },
  );
}
