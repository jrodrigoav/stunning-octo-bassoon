import { format } from 'date-fns';
export class WorkExperience {
    public startDate: string;
    public endDate: string | null;
    public isCurrentJob: boolean;
    constructor() {
        this.startDate = format(new Date(),'yyyy-MM');
        this.endDate = null;
        this.isCurrentJob = false;
    }
}
