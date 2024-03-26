"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPersona = exports.postPersona = exports.deletePersona = exports.getPersona = exports.getPersonas = void 0;
var connection_1 = __importDefault(require("../db/connection"));
var getPersonas = function (req, res) {
    connection_1.default.query('SELECT * from persona', function (err, data) {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getPersonas = getPersonas;
var getPersona = function (req, res) {
    var id = req.params.id;
    connection_1.default.query('SELECT * from persona where id = ?', id, function (err, data) {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getPersona = getPersona;
var deletePersona = function (req, res) {
    var id = req.params.id;
    connection_1.default.query('DELETE FROM persona WHERE id = ?', id, function (err, data) {
        if (err)
            throw err;
        res.json({
            msg: 'Persona eliminada con exito'
        });
    });
};
exports.deletePersona = deletePersona;
var postPersona = function (req, res) {
    var body = req.body;
    connection_1.default.query('INSERT INTO persona set ?', [body], function (err, data) {
        if (err)
            throw err;
        res.json({
            msg: 'Persona agreada con existo'
        });
    });
};
exports.postPersona = postPersona;
var putPersona = function (req, res) {
    var body = req.body;
    var id = req.params.id;
    connection_1.default.query('UPDATE persona set ? WHERE id = ?', [body, id], function (err, data) {
        if (err)
            throw err;
        res.json({
            msg: 'Persona actualziada con exito'
        });
    });
};
exports.putPersona = putPersona;
