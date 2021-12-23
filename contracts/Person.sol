// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Person {

    string private _name = 'test';

    constructor() {
        
    }
    
    /**
     * @dev Returns the person's name
     */
    function name() public view returns (string memory) {
        return _name;
    }

     /**
     * @dev Returns Rami's interview status
     */
    function hireRami(bool hired) public pure returns (string memory) {
        if (hired) {
            return 'Rami will start build the future on 20 Jan 2022';
        } else {
            return 'Rami will keep searching for other company';
        }
    }
}
