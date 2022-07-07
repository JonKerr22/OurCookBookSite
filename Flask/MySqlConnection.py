import mysql.connector
from mysql.connector import Error
from Response import Response
from StoredProcs import storedProcMap, SqlStoredProcs

from flask import jsonify


def selectFirstTableAll():
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcs.firstTableAll])
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        closeSqlConnection(connection)

        return records 

def selectUsersAll():
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcs.usersAll])
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        closeSqlConnection(connection)

        return records 

def cookbookById(id):
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcs.cookBookById], [id, ])
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        closeSqlConnection(connection)

        return records

def getUserCookbook(userId):
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcs.getUserCookbook], [userId ])
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        closeSqlConnection(connection)

        return records 

def addCookbook(userId, name):
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcs.addCookBook], [userId, name])

        connection.commit()
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        resp = Response((records[0] , 'Cookbook added successfully!'), 200)

        closeSqlConnection(connection)
        return [resp]


def getAllCookbooks():
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcs.cookbooksAll])
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        closeSqlConnection(connection)

        return records 

def deleteCookbook(id):
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcs.deleteCookbook], [id])
        connection.commit()

        resp = Response('cookbook deleted successfully!', 200)

        closeSqlConnection(connection)
        return [resp.__dict__]

def addUser(fullName, password, sessionKey):
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcs.addUser], [fullName, password, sessionKey])

        connection.commit()
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        resp = Response((records[0] , 'User added successfully!'), 200)

        closeSqlConnection(connection)
        return [resp]
    
def getUserByUsername(username):
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcs.getUserByUsername], [username])
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        closeSqlConnection(connection)

        return records
    
def getUserBysessionKey(sessionKey):
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcs.getUserBySessionKey], [sessionKey])
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        closeSqlConnection(connection)

        return records      

def addRecipe(cookbookId, userId, name, directions, ingredients):
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcs.addRecipe], [cookbookId, userId, name, directions, ingredients])

        connection.commit()
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        resp = Response((records[0] , 'Recipe added successfully!'), 200)

        closeSqlConnection(connection)
        return resp

def getRecipe(recipeId):
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcs.getRecipe], [recipeId ])
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        closeSqlConnection(connection)

        return records 

def getAllCookbookRecipes(cookbookId):
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcs.getAllCookbookRecipes], [cookbookId ])
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        closeSqlConnection(connection)

        return records 

def createSqlConnection():
    try:
        connection = mysql.connector.connect(host='localhost',
                                         database='OCB_local',
                                         user='root',
                                         password='Y9nz2943NAj')
        return connection
    except Error as e:
        print("Error in MySQL stuff", e)

def closeSqlConnection(connection):
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.close()
        connection.close()


