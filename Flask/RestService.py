from flask import Flask, jsonify
from flask_cors import CORS

import json

app = Flask(__name__)
CORS(app)


#TODO - pull these global vars into a separate mockup database for testing
#TODO - connect service to an actual database for CRUD operations
users = {
    "users": [
        {
            "id": "11",
            "name": "Test1 User1"
        },
        {
            "id": "22",
            "name": "Test2 User2"
        }
    ]
}
cookbooks = {
    "cookbooks": [
        {
            "id": "1",
            "name": "Global cookbook",
            "userAccess": ["11","12"],
            "recipeIds": ["111", "222"]
        },
        {
            "id": "2",
            "name": "User2 cookbook",
            "userAccess": ["12"],
            "recipeIds": ["222"]
        }
    ]
}
cookBooksStr = '[{"id": "1","name": "Global cookbook","userAccess": ["11","12"],"recipeIds": ["111", "222"]},{"id": "2","name": "User2 cookbook","userAccess": ["12"],"recipeIds": ["222"]}]'

recipes = {
    "recipies": [
        {
            "id": "111",
            "current": "cookies: butter and sugar and eggs and flour, then bake it",
            "entries" : [
                {
                    "GitSHA": "8de99", 
                    "Notes": "updated recipe (Not Real SHA)"
                },
                {
                    "GitSHA": "63g3ba", 
                    "Notes": "first version (Not Real SHA)"
                }
            ]
        },
        {
            "id": "222",
            "current": "brownies: chocolate and butter and sugar and eggs and flour, then bake it",
            "entries" : [
                {
                    "GitSHA": "9ae91", 
                    "Notes": "improved brownies (Not Real SHA)"
                },
                {
                    "GitSHA": "ffg3ba", 
                    "Notes": "first brownies (Not Real SHA)"
                }
            ]
        }
    ]
}



@app.route("/", methods=['GET'])
def index():
    retStr = "Welcome to CodezUp"
    return jsonify([retStr])

@app.route("/allUsers", methods=['GET'])
def AllUsers():
    global users
    return jsonify([users])

@app.route("/cookbook/<string:cookbookId>", methods=['GET'])
def Cookbook(cookbookId):
    global cookBooksStr
    ckbkObjs = json.loads(cookBooksStr)
    for obj in ckbkObjs:
        if obj["id"] == cookbookId:
            return jsonify([obj])
    return "Id Not Found"


if __name__ == '__main__':
    app.run(debug=True)