from flask import Flask, jsonify
from flask_cors import CORS

from MySqlConnection import selectFirstTableAll, selectUsersAll, cookbookById, getAllCookbooks

import json

app = Flask(__name__)
CORS(app)


@app.route("/", methods=['GET'])
def index():
    retStr = "Welcome to CodezUp"
    return jsonify([retStr])

@app.route("/allUsers", methods=['GET'])
def AllUsers():
    results = selectUsersAll()
    return jsonify(results)

@app.route("/cookbook/<string:cookbookId>", methods=['GET'])
def Cookbook(cookbookId):
    results = cookbookById(cookbookId)
    return jsonify(results)

@app.route("/cookbooks", methods=['GET'])
def Cookbooks():
    results = getAllCookbooks()
    return jsonify(results)

@app.route("/firstTableAll", methods=['GET'])
def FirstTableAll():
    results = selectFirstTableAll()
    return jsonify(results)



if __name__ == '__main__':
    app.run(debug=True)