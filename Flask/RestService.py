from flask import Flask, jsonify, request
from flask_cors import CORS
import uuid

from EncryptService import *

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
    dataJson = request.json
    username = dataJson['username']
    plaintextPassword = dataJson['password']
    encryptedPassword = encryptPassword(plaintextPassword)
    encryptedPasswordAsStr = str(encryptedPassword, 'utf-8')
    sessionKeyString = str(uuid.uuid4())

    resp = addUser(username, encryptedPasswordAsStr, sessionKeyString)
    return jsonify(resp)

@app.route("/confirmLogin", methods=['POST'])
def ConfirmLogin():
    dataJson = request.json
    username = dataJson['username']
    plaintextPassword = dataJson['password']

    userRecord = getUserByUsername(username)
    if(len(userRecord) != 1):
        return jsonify([None , False])
    storedPass = userRecord[0][2] #todo - there has to be better way to parse thru response than knowing the indices

    valid = verifyPassword(plaintextPassword, storedPass)

    return jsonify([userRecord[0], valid])

@app.route("/checkUserSessionKey", methods=['POST'])
def CheckUserSessionKey():
    dataJson = request.json
    sessionKey = dataJson['sessionKey']

    userRecord = getUserBysessionKey(sessionKey)
    if(len(userRecord) != 1):
        return jsonify([None])

    return jsonify([userRecord[0]])



if __name__ == '__main__':
    app.run(debug=True, port=5001)