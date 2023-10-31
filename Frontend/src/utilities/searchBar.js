import React from "react";
import {TextField} from '@radix-ui/themes';

import {MagnifyingGlassIcon} from '@radix-ui/react-icons';




export default function SearchBar(){
    return (
        <div className="searchDiv">
        <TextField.Root className="SearchBar">
            <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <TextField.Input accentColor="red" placeholder="Search your question..." mt="50%" />
        </TextField.Root>
        </div>

    )
}