from enum import Enum

class SqlStoredProcs(Enum):
    firstTableAll = 1,
    usersAll = 2,
    cookBookById = 3,
    cookbooksAll = 4,
    addCookBook = 5,
    deleteCookbook = 6,
    addUser = 7,
    getUserByUsername = 8,
    getUserBySessionKey = 9,
    getUserCookbook = 10,
    addRecipe = 11,
    getRecipe = 12,
    getAllCookbookRecipes = 13

storedProcMap = {
    SqlStoredProcs.firstTableAll : 'getFirstTableAll',
    SqlStoredProcs.usersAll : 'getAllUsers',
    SqlStoredProcs.cookBookById : 'getCookBook',
    SqlStoredProcs.cookbooksAll: 'getAllCookBooks',
    SqlStoredProcs.addCookBook: 'addCookBook',
    SqlStoredProcs.deleteCookbook: 'deleteCookbook',
    SqlStoredProcs.addUser: 'addUser',
    SqlStoredProcs.getUserByUsername: 'getUserByUsername',
    SqlStoredProcs.getUserBySessionKey: 'getUserBySessionKey',
    SqlStoredProcs.getUserCookbook: 'getUserCookbook',
    SqlStoredProcs.addRecipe: 'addRecipe',
    SqlStoredProcs.getRecipe: 'getRecipe',
    SqlStoredProcs.getAllCookbookRecipes: 'getAllCookbookRecipes'
}