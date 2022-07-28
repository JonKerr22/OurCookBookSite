from flask import Flask, jsonify, request
from flask_cors import CORS
import uuid

from EncryptService import *

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


@app.route("/addCookbook", methods=['POST'])
def AddCookbook():
    try:
        dataJson = request.json
        cookbookName = dataJson['cookbookName']
        userId = dataJson['userId']
        resp = addCookbook(userId, cookbookName)
        if(resp[0].status_code == 200): #TODO - this status code check is definitely not the way to go, response object is maybe unneeded
            return jsonify([True])
        return jsonify(resp)
    except Exception as e:
        print('error print: ')
        print(e)

@app.route("/getUserCookbook", methods=['POST'])
def GetUserCookbook():
    dataJson = request.json
    userId = dataJson['userId']
    resp = getUserCookbook(userId)

    if(len(resp) < 1):
        return jsonify([None])
    return jsonify(resp)


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
    if(resp[0].status_code == 200):
        newUserId = resp[0].msg[0][0] #TODO - maybe the object needs a better structure
        return jsonify([True, sessionKeyString, newUserId])
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

@app.route("/addNewRecipe", methods=['POST'])
def AddNewRecipe():
    dataJson = request.json
    cookbookId = dataJson['cookbookId']
    userId = dataJson['userId']
    name = dataJson['name']
    directions = dataJson['directions']
    ingredients = dataJson['ingredients']

    resp = addRecipe(cookbookId, userId, name, directions, ingredients)
    if(resp.status_code == 200): #TODO - this status code check is definitely not the way to go, response object is maybe unneeded
        return jsonify([True, resp.msg[0][0]]) #0,0 idx is the newly created recipe's ID

@app.route("/getRecipe", methods=['POST'])
def GetRecipe():
    dataJson = request.json
    recipeId = dataJson['recipeId']
    resp = getRecipe(recipeId)

    if(len(resp) < 1):
        return jsonify([None])
    return jsonify(resp)

@app.route("/getAllCookbookRecipes", methods=['POST'])
def GetAllCookbookRecipes():
    dataJson = request.json
    cookbookId = dataJson['cookbookId']
    resp = getAllCookbookRecipes(cookbookId)

    if(len(resp) < 1):
        return jsonify([None])
    return jsonify(resp)



if __name__ == '__main__':
    app.run(debug=True, port=5001)