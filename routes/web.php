<?php




Route::get('/',function(){
    return view ('welcome');
});

Route::get('/{something}', function () {
        return view('welcome');
});





