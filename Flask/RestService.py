from flask import Flask, jsonify, request
from flask_cors import CORS
from EncryptService import encryptPassword

#todo convert to import everything in here
from MySqlConnection import *

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


@app.route("/addUser1Cookbook", methods=['POST'])
def AddUser1Cookbook():
    try:
        dataJson = request.json
        cookbookName = dataJson['cookbookName']
        resp = addUser1Cookbook(cookbookName)
        return jsonify(resp)
    except Exception as e:
        print('error print: ')
        print(e)

@app.route("/deleteCookbook", methods=['POST'])
def DeleteCookbook():
    dataJson = request.json
    cookbookId = dataJson['cookbookId']
    resp = deleteCookbook(cookbookId)
    return jsonify(resp)

@app.route("/registerUser", methods=['POST'])
def RegisterUser():
    try:
        print('got to resgisterUserPoint')
        #dataJson = request.json
        #username = dataJson['username']
        #plaintextPassword = dataJson['password']
        #encryptedPassword = encryptPassword('plaintextPassword')
        #temp
        #print(encryptedPassword)
        #then send to db
        return jsonify(True)
    except Exception as e:
        print('error print: ')
        print(e)

@app.route("/nothingPost", methods=['GET'])
def NothingPost():
    print('anything?')
    return jsonify('nothing')


if __name__ == '__main__':
    app.run(debug=True, port=5001)