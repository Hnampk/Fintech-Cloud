pragma solidity ^0.4.24;

contract Goal{
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        mapping(address => bool) approvals;
        uint approvalsCount;
    }
    
    mapping(address => uint) contributions;
    mapping(address => bool) contributors;
    address[] public contributorsArray;
    Request[] public requests;
    
    modifier isContributor{
        require(contributors[msg.sender]);
        _;
    }
    
    constructor(address[] initContributors) public {
        for(uint i = 0; i < initContributors.length; i++){
            contributors[initContributors[i]] = true;
        }
        contributorsArray = initContributors;
    }
    
    function contribute() public payable{
        contributions[msg.sender] += msg.value;
    }
    
    
    function createRequest(string description, uint value, address recipient) public isContributor{
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalsCount: 0
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public isContributor{
        Request storage request = requests[index];
        
        require(!request.complete);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalsCount++;
    }
    
    function finalizeRequest(uint index) public isContributor{
        Request storage request = requests[index];
        
        require(!request.complete);
        require(request.approvalsCount == contributorsArray.length);
        require(request.value <= address(this).balance);
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }
    
    function cancelRequest(uint index) public isContributor{
        Request storage request = requests[index];
        
        require(!request.complete);
        request.complete = true;
    }
    
    function getContributors() public view returns(address[]){
        return contributorsArray;
    }
    
    function getContribution(address addr) public view returns(uint){
        return contributions[addr];
    }
    
    function getGoalBalance() public view returns(uint){
        return address(this).balance;
    }
    
    function getRequestLength() public view returns(uint){
        return requests.length;
    }
    
    function () payable public {
        contributions[msg.sender] += msg.value;
    }
}