// ignore_for_file: prefer_const_constructors, unnecessary_new, avoid_print

import 'dart:html';

import 'package:flutter/material.dart';
import 'package:flutter_app_sastreria/models/claseMaterial.dart';

import 'package:flutter_app_sastreria/models/Articulo.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:async';

class Lista_Faltantes extends StatelessWidget {
  Lista_Faltantes({Key? key}) : super(key: key);

  Future<List<Articulo>> _selectMaterials() async {
    String url = 'http://localhost:4500/api/selectmaterialsinventory';
    final response = await http.get(Uri.parse(url));
    List<Articulo> articulos = [];

    if (response.statusCode == 200) {
      //print(response.body);
      String strData = utf8.decode(response.bodyBytes);
      final jsonData = jsonDecode(strData);

      // for (var item in jsonData["data"]) {
      //   articulos.add(Articulo(
      //       codigo: item["Codigo"],
      //       categoria: item["Categoria"],
      //       descripcion: item["Descripcion"],
      //       cantidad: item["Cantidad"]));
      // }

      print(articulos);
      return articulos;
    } else {
      throw Exception("Connection failed");
    }
  }

  @override
  Widget build(BuildContext context) {
    _selectMaterials();
    return new MaterialApp(
        title: 'Materiales',
        theme: new ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: Scaffold(
            appBar: AppBar(title: Text('Articulos Faltantes')),
            body: new ListView(
              children: materiales.map(_buildItem).toList(),
            )));
  }
}

Widget _buildItem(Materiales articulo) {
  return new ListTile(
    title: new Text(articulo.categoria),
    subtitle: Column(children: <Widget>[
      new Text('Descripcion: ${articulo.descripcion}'),
      new Text('Cantidad: ${articulo.cantidad}'),
    ]),
    tileColor: Colors.blue.shade100,
    leading: new Icon(Icons.checkroom),
    contentPadding: EdgeInsets.symmetric(vertical: 5.0, horizontal: 10.0),
    onTap: () {
      print(articulo.codigo);
    },
  );
}
