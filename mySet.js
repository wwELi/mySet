
class mySet{

  	constructor(list = []) {
        this.setList = [];
  		for(let v of [...list]) {
           this.add(v);
  		}

	}

	get size(){
		return this.setList.length;
	}

	add(val) {

		this.setList.find(n => n === val) || (this.setList.push(val));

		return this.setList;
	}

	clear() {
		this.setList = [];
	}

	delete(v) {
        
		for(let i = 0, len = this.setList.length; i < len; i++) {
           if(v === this.setList[i]) {
           	  this.setList.splice(i, 1);
           	  return true;
           }
		}
		return false;
	}

	has(v) {

		for(let i of this.setList) {
			if(i === v) {
				return true
			}
		}

        return false;
	}
    
    forEach(callback) {
    	return this.setList.forEach((v, index, own) => callback(v, index, own));
    }

    entries(){
    	return this.setList.entries();
    }

    [Symbol.iterator]() {
	  return setList[Symbol.iterator].apply(this.setList);
    }
}

