export default class Todo {
    /*
        priority - важность дела
        text - контент
        dt - дата создания
        dl -  deadline
    */
    constructor(priority, text, dl) {
        this.priority = priority;
        this.text = text;
        this.dt = Date.now();
        this.dl = dl;
    }
}
