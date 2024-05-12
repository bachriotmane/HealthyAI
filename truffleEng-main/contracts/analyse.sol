// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract AnalyseContrat {
    struct Analyse {
        uint256 id;
        bytes32 name;
        bytes32 text;
    }
    
    Analyse private analyse;

    function setter(uint256 _id, bytes32  _name, bytes32 _text) public {
        analyse.id = _id;
        analyse.name = _name;
        analyse.text = _text;
    }

    function getter() public view returns (uint256, bytes32, bytes32 ) {
        return (analyse.id, analyse.name, analyse.text);
    }
}

