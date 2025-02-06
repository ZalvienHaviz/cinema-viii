// dont forget create empty sessionStorage when start
// delete button : 'deleteRow' / 'ShowDeleteButton'
function ShowHideDeleteButton() {
    let deleteButtons = document.getElementsByClassName('deleteRow');
    
    if (sessionStorage.getItem('ShowEditButton') == 'true') {
        ShowHideEditButton();
    }

    if (!sessionStorage.getItem('ShowDeleteButton')) {
        sessionStorage.setItem('ShowDeleteButton', 'false');
    }
    
    if (sessionStorage.getItem('ShowDeleteButton') == 'true') {
        for (let button of deleteButtons) {
            button.style.display = 'none';
        }
        sessionStorage.setItem('ShowDeleteButton', 'false');
    } else {
        for (let button of deleteButtons) {
            button.style.display = 'table-cell';
        }
        sessionStorage.setItem('ShowDeleteButton', 'true');
    }
    
}

// delete button : 'editRow' / 'ShowEditButton'
function ShowHideEditButton() {
    let editButtons = document.getElementsByClassName('editRow');
    
        if (sessionStorage.getItem('ShowDeleteButton') == 'true') {
            ShowHideDeleteButton();
        }
    
    if (!sessionStorage.getItem('ShowEditButton')) {
        sessionStorage.setItem('ShowEditButton', 'false');
    }
    
    if (sessionStorage.getItem('ShowEditButton') == 'true') {
        for (let button of editButtons) {
            button.style.display = 'none';
        }
        sessionStorage.setItem('ShowEditButton', 'false');
    } else {
        for (let button of editButtons) {
            button.style.display = 'table-cell';
        }
        sessionStorage.setItem('ShowEditButton', 'true');
    }
}

CreateCategoryToSessionStorage();
HideFunctionButton();

function testWriteFile() {
    var userList = system.users;
    var filePath;
    var isMode;
    var fileObject;

    function writeToFile( path, binary, object )
    {
    print( "Writing " + path + " to file..." );
    var output = writeFile( path, mode, object );
    print( "The number of bytes written to file was: " + output );
    return output
    }

    filePath = "C:\\users.xml";
    isMode = null;
    fileObject = userList;
    writeToFile( filePath, isMode, fileObject );
}


function HideFunctionButton() {
    // delete button
    let test = sessionStorage.getItem('ShowDeleteButton') === 'false';
    
    if (!sessionStorage.getItem('ShowDeleteButton')) {
        sessionStorage.setItem('ShowDeleteButton', 'false');
    }
    let deleteButtons = document.getElementsByClassName('deleteRow');
    if (!sessionStorage.getItem('ShowEditButton')) {
        sessionStorage.setItem('ShowEditButton', 'false');
    }
    let editButtons = document.getElementsByClassName('editRow');

    for (let button of deleteButtons) {
        button.style.display = 'none';
    }
    for (let button of editButtons) {
        button.style.display = 'none';
    }
    sessionStorage.setItem('ShowDeleteButton', 'false')
    sessionStorage.setItem('ShowEditButton', 'false')

    ResetCategoryList();
    ResetSortList();
}

// Sort Section
function ShowHideSortList() {
    if (sessionStorage.getItem('ShowSortList') === 'false') {
        document.getElementById('SortList').style.display = 'inline flex';
        sessionStorage.setItem('ShowSortList', 'true');
    } else {
        document.getElementById('SortList').style.display = 'none';
        sessionStorage.setItem('ShowSortList', 'false');
    }
    // CreateCategoryToSessionStorage()
}

function ResetSortList() {
    document.getElementById('SortList').style.display = 'none';
    sessionStorage.setItem('ShowSortList', 'false');
    CreateSortByToSessionStorage();
}

function CreateSortByToSessionStorage() {
    sessionStorage.setItem('SortByName', 'false');
    sessionStorage.setItem('SortByNumber', true);
    document.getElementById('sortByNumberButton').className = 'btn btn-success category-style';
}

function ChangeColorSortButton(selectedSort) {
    // color : true = #95BF74, false = #626868
    let sortByNumberButton = document.getElementById('sortByNumberButton');
    let sortByNameButton = document.getElementById('sortByNameButton');

    if (selectedSort === 'Number') {
        ResetAllSortToDefault();
        sessionStorage.setItem('SortByNumber', true);
        sortByNumberButton.className = 'btn btn-success category-style';
    } else if (selectedSort === 'Name') {
        ResetAllSortToDefault();
        sessionStorage.setItem('SortByName', true);
        sortByNameButton.className = 'btn btn-success category-style';
    }
}

function ResetAllSortToDefault() {
    sessionStorage.setItem('SortByNumber', false);
    document.getElementById('sortByNumberButton').className = 'btn btn-secondary category-style';
    sessionStorage.setItem('SortByName', false);
    document.getElementById('sortByNameButton').className = 'btn btn-secondary category-style';
}

// Category Section
function ShowHideCategoryList() {
    if (sessionStorage.getItem('ShowCategoryList') === 'false') {
        document.getElementById('FilterByCategoryList').style.display = 'inline flex';
        sessionStorage.setItem('ShowCategoryList', 'true');
    } else {
        document.getElementById('FilterByCategoryList').style.display = 'none';
        sessionStorage.setItem('ShowCategoryList', 'false');
    }
    // CreateCategoryToSessionStorage()
}

function ResetCategoryList() {
    document.getElementById('FilterByCategoryList').style.display = 'none';
    sessionStorage.setItem('ShowCategoryList', 'false');
    CreateCategoryToSessionStorage();
}

function CreateCategoryToSessionStorage() {
    ResetAllCategoryToCategoryAll();
    sessionStorage.setItem('CategoryHorror', 'false');
    sessionStorage.setItem('CategoryThriller', 'false');
    sessionStorage.setItem('CategoryMystery', 'false');
    sessionStorage.setItem('CategoryComedy', 'false');
    sessionStorage.setItem('CategoryAll', 'true');
    document.getElementById('CategoryAllButton').className = 'btn btn-success category-style';
}

function ChangeColorCategoryButton(selectedCategory) {
    // color : true = #95BF74, false = #626868
    if (selectedCategory === 'Horror' && sessionStorage.getItem('CategoryHorror') === 'false') {
        ResetAllCategoryToCategoryAll();
        sessionStorage.setItem('CategoryHorror', true);
        document.getElementById('CategoryHorrorButton').className = 'btn btn-success category-style';
    } else if (selectedCategory === 'Thriller' && sessionStorage.getItem('CategoryThriller') === 'false') {
        ResetAllCategoryToCategoryAll();
        sessionStorage.setItem('CategoryThriller', true);
        document.getElementById('CategoryThrillerButton').className = 'btn btn-success category-style';
    } else if (selectedCategory === 'Mystery' && sessionStorage.getItem('CategoryMystery') === 'false') {
        ResetAllCategoryToCategoryAll();
        sessionStorage.setItem('CategoryMystery', true);
        document.getElementById('CategoryMysteryButton').className = 'btn btn-success category-style';
    } else if (selectedCategory === 'Comedy' && sessionStorage.getItem('CategoryComedy') === 'false') {
        ResetAllCategoryToCategoryAll();
        sessionStorage.setItem('CategoryComedy', true);
        document.getElementById('CategoryComedyButton').className = 'btn btn-success category-style';
    } else {
        ResetAllCategoryToCategoryAll();
        sessionStorage.setItem('CategoryAll', true);
        document.getElementById('CategoryAllButton').className = 'btn btn-success category-style';
    }
}

function ResetAllCategoryToCategoryAll() {
    let categoryAllButton = document.getElementById('CategoryAllButton');
    let categoryHorrorButton = document.getElementById('CategoryHorrorButton');
    let categoryThrillerButton = document.getElementById('CategoryThrillerButton');
    let categoryMysteryButton = document.getElementById('CategoryMysteryButton');
    let categoryComedyButton = document.getElementById('CategoryComedyButton');

    sessionStorage.setItem('CategoryAll', false);
    categoryAllButton.className = 'btn btn-secondary category-style';
    sessionStorage.setItem('CategoryHorror', false);
    categoryHorrorButton.className = 'btn btn-secondary category-style';
    sessionStorage.setItem('CategoryThriller', false);
    categoryThrillerButton.className = 'btn btn-secondary category-style';
    sessionStorage.setItem('CategoryMystery', false);
    categoryMysteryButton.className = 'btn btn-secondary category-style';
    sessionStorage.setItem('CategoryComedy', false);
    categoryComedyButton.className = 'btn btn-secondary category-style';
}
