import mysql.connector
from mysql.connector import Error
from enum import Enum

class SqlStoredProcedures(Enum):
    firstTableAll = 1,
    usersAll = 2,
    cookBookById = 3,
    cookbooksAll = 4

storedProcMap = {
    SqlStoredProcedures.firstTableAll : 'getFirstTableAll',
    SqlStoredProcedures.usersAll : 'getAllUsers',
    SqlStoredProcedures.cookBookById : 'getCookBook',
    SqlStoredProcedures.cookbooksAll: 'getAllCookBooks'
}

# TODO - there absolutely must be a more generic way to make these calls - probs with an enum
def selectFirstTableAll():
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcedures.firstTableAll])
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        closeSqlConnection(connection)

        return records 

def selectUsersAll():
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcedures.usersAll])
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        closeSqlConnection(connection)

        return records 

def cookbookById(id):
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcedures.cookBookById], [id, ])
        records = []
        for result in cursor.stored_results():
            records += result.fetchall()

        closeSqlConnection(connection)

        return records 

def getAllCookbooks():
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.callproc(storedProcMap[SqlStoredProcedures.cookbooksAll])
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


