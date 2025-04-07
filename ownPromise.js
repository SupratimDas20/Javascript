class Promise2 {
    constructor(fn) {
        this.thenCallback = null;

        const resolve = (value) => {
            // Save the value and call thenCallback if it exists
            if (this.thenCallback) {
                this.thenCallback(value);
            } else {
                // Store the resolved value if thenCallback isn't set yet
                this.resolvedValue = value;
                this.isResolved = true;
            }
        };

        fn(resolve);
    }

    then(callback) {
        this.thenCallback = callback;

        // If promise was resolved before then was called
        if (this.isResolved) {
            this.thenCallback(this.resolvedValue);
        }
    }
}

function someTask(resolve) {
    setTimeout(function () {
        console.log("callback based setTimeout completed");
        resolve();
    }, 3000);
}

function setTimeoutPromisified() {
    return new Promise2(someTask);
}

const p = setTimeoutPromisified();

function callback() {
    console.log("callBack has been called");
}

p.then(callback);