// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract ConsultationContrat{
    
    struct Consultation {
        uint256 date;
        bytes32 conversation;
        bytes32 summary;
        bytes32 conseils;
    }
    
    Consultation private consultation;

    function setter(uint256 _date, bytes32  _conversation, bytes32  _summary, bytes32  _conseils) public {
        consultation.date = _date;
        consultation.conversation = _conversation;
        consultation.summary = _summary;
        consultation.conseils = _conseils;
    }

    function getter() public view returns (uint256, bytes32 , bytes32 , bytes32 ) {
        return (consultation.date, consultation.conversation, consultation.summary, consultation.conseils);
    }
}
