import os
import hashlib


with open(f"./main.js", 'a') as file:
    file.write("""
import React from "react";
import {Route, Routes} from "react-router-dom";
    
    """)
    for i in range(6):
        for j in range(5):
            file.write(f"import GameMap{j}{i} from './{j},{i}';")

    file.write("""
export default function GameMain(){
    return (
        <div>
            <Routes>
    """)
    for i in range(6):
        for j in range(5):
            file.write(
                f"<Route path={{`/{hashlib.sha256((f'{j},{i}abcde').encode('ASCII')).hexdigest()}`}} element={{<GameMap{j}{i} />}} />")

    file.write("""
            </Routes>
        </div>
    );
}
    """)
