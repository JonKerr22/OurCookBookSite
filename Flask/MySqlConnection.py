import mysql.connector
from mysql.connector import Error

sqlNameFuncMapping = {
    'firstTableAll' : """ SELECT * FROM firstTable""",
    'usersAll' : """ SELECT * FROM users """,
    'cookbookById' : """ SELECT * FROM cookbooks WHERE id=#id#"""
}

# TODO - there absolutely must be a more generic way to make these calls - probs with an enum
def selectFirstTableAll():
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.execute(sqlNameFuncMapping['firstTableAll'])
        records = cursor.fetchall()

        closeSqlConnection(connection)

        return records 

def selectUsersAll():
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        cursor.execute(sqlNameFuncMapping['usersAll'])
        records = cursor.fetchall()

        closeSqlConnection(connection)

        return records 

def cookbookById(id):
    connection = createSqlConnection()
    if connection.is_connected():
        cursor = connection.cursor()
        selectQuerString = sqlNameFuncMapping['cookbookById'].replace('#id#', id)
        cursor.execute(selectQuerString)
        records = cursor.fetchall()

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


