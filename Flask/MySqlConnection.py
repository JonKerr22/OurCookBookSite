import mysql.connector
from mysql.connector import Error

def selectFirstTableAll(connection, cursor):
    selectQuery = """ SELECT * FROM firstTable"""
    cursor.execute(selectQuery)
    records = cursor.fetchall()
    return records 
    

def sqlCall(functionCall):
    retVal = None
    try:
        connection = mysql.connector.connect(host='localhost',
                                         database='OCB_local',
                                         user='root',
                                         password='Y9nz2943NAj')
        if connection.is_connected():
            cursor = connection.cursor()
            if functionCall == 'firstTableAll':
                retVal = selectFirstTableAll(connection, cursor)

    except Error as e:
        print("Error in MySQL stuff", e)
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")
        return retVal
