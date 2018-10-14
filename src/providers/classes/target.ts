

export class MemberTarget{
    memberId: string;
    memberName: string;
    target: number;

    constructor(){
        this.memberId = "";
        this.memberName = "";
        this.target = 0;
    }

    onResponseData(id: string, name: string, target: number){
        this.memberId = id;
        this.memberName = name;
        this.target = target;
    }
}