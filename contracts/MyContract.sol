// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract MyContract {
    uint256 nextId;
    event MyEvent(
        uint256 indexed id,
        uint256 indexed date,
        string indexed value
    );

    function emitEvent(string calldata value) external {
        emit MyEvent(nextId, now, value);
        nextId++;
    }
}

/* uint256 data;

    function getData() external view returns (uint256) {
        return data;
    }

    function setData(uint256 _data) external {
        data = _data;
    }

    function setDataPrivate(uint256 _data) private {
        data = _data + 10;
    }*/

/*  string public functionCalled;

    function sendEther() external payable {
        functionCalled = "sendEther";
    }

    function() external payable {
        functionCalled = "fallback";
    }*/
