// ignore_for_file: prefer_const_constructors, unnecessary_new, avoid_print

import 'package:flutter/material.dart';
import 'package:flutter_app_sastreria/models/Articulo.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:async';

bool tonoColor = false;

class missing_materials extends StatelessWidget {
  const missing_materials({Key? key}) : super(key: key);

  Future<List<Articulo>> _selectMaterials() async {
    String url = 'http://192.168.1.3:4500/api/selectmaterialsinventory';
    final response = await http.get(Uri.parse(url));
    List<Articulo> articulos = [];

    if (response.statusCode == 200) {
      String strData = utf8.decode(response.bodyBytes);
      final jsonData = jsonDecode(strData);
      List elementos = jsonData['materiales'];

      for (var i = 0; i < elementos.length; i++) {
        articulos.add(Articulo(
            codigo: elementos[i]["Codigo"],
            categoria: elementos[i]["Categoria"],
            descripcion: elementos[i]["Descripcion"],
            cantidad: elementos[i]["Cantidad"]));
      }

      // print(articulos);
      return articulos;
    } else {
      throw Exception("Connection failed");
    }
  }

  @override
  Widget build(BuildContext context) {
    Future<List<Articulo>> inventario = _selectMaterials();
    return MaterialApp(
        title: 'Materiales',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: Scaffold(
            appBar: AppBar(
              title: Text('Articulos Faltantes'),
            ),
            body: FutureBuilder(
              future: inventario,
              builder: (context, snapshot) {
                if (snapshot.hasData) {
                  return ListView(
                    children: _buildItem(snapshot.data),
                  );
                } else if (snapshot.hasError) {
                  print(snapshot.error);
                  return Text("Error");
                }
                return Center(
                  child: CircularProgressIndicator(),
                );
              },
            )));
  }
}

List<Widget> _buildItem(datos) {
  List<Widget> inventario = [];
  Color colorLinea;

  for (var articulo in datos) {
    tonoColor = !tonoColor;

    if (tonoColor) {
      colorLinea = Colors.blueGrey.shade200;
    } else {
      colorLinea = Colors.blueGrey.shade400;
    }

    inventario.add(ListTile(
      title: Text(articulo.categoria),
      subtitle: Column(children: <Widget>[
        Text('Descripcion: ${articulo.descripcion}',
            style: new TextStyle(fontWeight: FontWeight.bold)),
        Text('Cantidad: ${articulo.cantidad}',
            style: new TextStyle(fontWeight: FontWeight.bold)),
      ]),
      tileColor: colorLinea,
      leading: Icon(Icons.checkroom),
      contentPadding: EdgeInsets.symmetric(vertical: 5.0, horizontal: 10.0),
      onTap: () {
        print(articulo.codigo);
      },
    ));
  }

  return inventario;
}
