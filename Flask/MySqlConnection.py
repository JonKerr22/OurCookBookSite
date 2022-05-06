import mysql.connector
from mysql.connector import Error
from enum import Enum
from Response import Response

from flask import jsonify

class SqlStoredProcs(Enum):
    firstTableAll = 1,
    usersAll = 2,
    cookBookById = 3,
    cookbooksAll = 4,
    addCookBook = 5,
    deleteCookbook = 6,
    addUser = 7,
    getUserByUsername = 8

storedProcMap = {
    SqlStoredProcs.firstTableAll : 'getFirstTableAll',
    SqlStoredProcs.usersAll : 'getAllUsers',
    SqlStoredProcs.cookBookById : 'getCookBook',
    SqlStoredProcs.cookbooksAll: 'getAllCookBooks',
    SqlStoredProcs.addCookBook: 'addCookBook',
    SqlStoredProcs.deleteCookbook: 'deleteCookbook',
    SqlStoredProcs.addUser: 'addUser',
    SqlStoredProcs.getUserByUsername: 'getUserByUsername'
}

# TODO - there absolutely must be a more generic way to make these calls - probs with an enum
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

def addUser1Cookbook(name):
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcs.addCookBook], [1, name])

        connection.commit()
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        resp = Response((records[0] , 'User added successfully!'), 200)

        closeSqlConnection(connection)
        return [resp.__dict__]


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
        return [resp.__dict__]
    
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


