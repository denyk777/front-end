'use strict';

class OperationExecutor {
  constructor() {
    this.state = {
      0: this.firstTaskExecute.bind(this),
      1: this.secondTaskExecute.bind(this),
      2: this.thirdTaskExecute.bind(this),
      3: this.fourthTaskExecute.bind(this),
      4: this.fifthTaskExecute.bind(this),
      5: this.sixthTaskExecute.bind(this),
      6: this.seventhTaskExecute.bind(this),
      7: this.eighthTaskExecute.bind(this),
      8: this.ninthTaskExecute.bind(this),
      9: this.tenthTaskExecute.bind(this),
    };
  }

  /**
   * Execute some transformation of incoming arg
   * @param actionType – type of transformation
   * @param arg – incoming arg
   * @returns object with result
   */
  execute(actionType, arg) {
    return this.state[actionType](arg);
  }

  /**
   * First task of homework
   * @param arg – object with value that you should clone
   * arg = { obj1: { ... } }
   * @returns object that contains source object and his modified clone
   */
  firstTaskExecute(arg) {
    let newObj = {obj1: {}};
    Object.assign(newObj.obj1, arg.obj1);
    newObj.obj1.firstName = "Kazimir";
    console.log("Key firstName in obj1 = " + arg.obj1.firstName);
    return newObj;
  }

  /**
   * Second task of homework
   * @param arg – object with values that you should combine
   * arg = { obj1: { ... }, obj2: { ... } }
   * @returns object that contains source objects and their combined and modified clone
   */
  secondTaskExecute(arg) {
    let twoObject = {obj1: {}};
    Object.assign(twoObject.obj1, arg.obj1, arg.obj2);
    twoObject.obj1.a = 10;
    console.log('Key a in obj1 = ' + arg.obj1.a);
    return twoObject;
  }

  /**
   * Third task of homework
   * @param arg – object with value that you should modify
   * arg = { obj1: { ... } }
   * @returns object that contains modified source object
   */
  thirdTaskExecute(arg) {
    let val = arg.obj1.relatives;
    val.forEach((item) => {
      item.gender = "male";
    });
    return arg
  }

  /**
   * Fourth task of homework
   * @param arg – object with value that contains relatives
   * arg = { obj1: { ... relatives: [ ... ] ... } }
   * @returns object that contains array of string with female relatives
   */
  fourthTaskExecute(arg) {
    let arrayAnswerMessage = [];
    let val = arg.obj1.relatives;
    val.forEach((item) => {
      arrayAnswerMessage.push(`Hello ${item.firstName} ${item.lastName}`);
    });
    return arrayAnswerMessage;
  }

  /**
   * Fifth task of homework
   * @param arg – object which contains new color of the button and the class of it
   * arg = { color: '...', className: '...' }
   * @returns string which contains the class of the button and current color
   */
  fifthTaskExecute(arg) {
    let button_4 = document.getElementsByClassName("button_4")[0];
    if (button_4.style.backgroundColor === 'red') {
      button_4.style.backgroundColor = '';
    } else {
      button_4.style.backgroundColor = 'red';
    }
    return '';
  }

  /**
   * Sixth task of homework
   * @param arg – object with values that you should handle
   * arg = { obj1: { ... } }
   * @returns object that contains array of items that match the hostname on which the application is running
   */
  sixthTaskExecute(arg) {
    let hostArray = [];
    arg.hostNames.forEach((host) => {
       if (location.hostname === host) {
         hostArray.push(host);
       }
    });
    return hostArray;
  }

  /**
   * Seventh task of homework
   * @param arg – object which contains simple key-value pairs
   * arg = { obj1: { key: value } }
   * @returns obj that contains swap pairs ('value: key')
   */
  seventhTaskExecute(arg) {
    let array = {};
    for (let myKey in arg) {
      array[arg[myKey]] = myKey;
    }
    return array;
  }

  /**
   * Eighth task of homework
   * @param arg – object which contains two array
   * arg = { obj1: { ... } }
   * @returns obj that built using array's values
   */
  eighthTaskExecute(arg) {
    let array = arg.arr1.concat(arg.arr2);
    let objectList = {};
    for (let i = 0; i < array.length; i = i + 2) {
      objectList[array[i]] = array[i+1];
    }
    if (array.length%2 !== 0) {
      objectList[array[array.length - 1]] = null;
    }
    return objectList;
  }

  /**
   * Ninth task of homework
   * @param arg – object which contains array of users
   * arg = { obj1: { users: [...] } }
   * @returns obj that contains pairs id: obj with this id
   */
  ninthTaskExecute(arg) {
    let usersArray = {};
    arg.users.forEach((item) => {
      usersArray[item.id] = {
            firstName: item.firstName,
            lastName: item.lastName
          }
    });
    return usersArray;
  }

  /**
   * Tenth task of homework
   * @param arg – object which contains class of item and empty array
   * arg = { obj1: { ... } }
   * @returns obj that contains the array with info about children of the node
   */
  tenthTaskExecute(arg) {
    let task_9 = document.getElementsByClassName('task_9')[0];
    let childrenInfo = [];

    recursion(task_9, childrenInfo);
    return childrenInfo;

    function recursion(element, arr) {
      let childs = element.children;
      for (let i = 0; i < childs.length; i++) {
        if (childs[i].childElementCount > 0) {
          let childsElement = [];
          arr.push({tagName: childs[i].tagName, className: childs[i].className, childsElement});
          recursion(childs[i], childsElement);
        } else {
          arr.push({tagName: childs[i].tagName, className: childs[i].className});
        }
      }
    }
  }
}

export default OperationExecutor;
