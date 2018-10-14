import { AppLog } from "./log";
import { MemberTarget } from "./target";
import { User } from "./user";


export class Goal {
    id: string;
    name: string;
    startDate: number;
    endDate: number;
    totalTarget: number = null;
    currentSaving: number = 0;
    logs: Array<AppLog> = [];
    memberTargets: Array<MemberTarget> = []
    membersArray: Array<User> = [];

    constructor() {
        this.id = "";
        this.name = "";
    }

    addMember(member: User, personalTarget: number) {
        this.membersArray.push(member);

        let target = new MemberTarget();
        target.onResponseData(member.id, member.name, personalTarget);
        this.memberTargets.push(target)
    }
}

export class BrieflyGoal {
    id: string;
    name: string;
    endDate: number;
    totalSaved: number;
    totalTarget: number;
    membersArray: Array<User>
}