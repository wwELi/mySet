
describe('test size arrt', () =>{
	const m1 = new mySet([1, 2, 1])
    it('size_array', ()=>{
        expect(m1.size).toBe(2);
      })
    const m2 = new mySet('jjjjjj');
    it('size_string', ()=>{
        expect(m2.size).toBe(1);
      })
    const m3 = new mySet('abc');
    it('size_string', ()=>{
        expect(m3.size).toBe(3);
      })
}
)

describe('test add function', () => {
	const m1 = new mySet([1,2])
    it('add', ()=>{
    	m1.add(1);
        expect(m1.size).toBe(2);
        m1.add();
        expect(m1.size).toBe(3);
        console.log(m1)
        expect(m1.has(undefined)).toBe(true);
      })
})

describe('test delete function', () => {
	
    it('delete undefined', ()=>{
    	const m1 = new mySet([1,2])
        expect(m1.delete()).toBe(false);
        m1.add()
        expect(m1.delete()).toBe(true);
      })
    it('delete item', ()=>{
    	const m1 = new mySet([1,2])
        expect(m1.delete(1)).toBe(true);
        expect(m1.size).toBe(1);
        expect(m1.delete('2')).toBe(false);
      })
})

describe('test has function', () => {
	it('has', ()=>{
		const m1 = new mySet([1,2])
        expect(m1.has(1)).toBe(true);
        expect(m1.has(4)).not.toBe(true);
	})
})

describe('test clear function', () => {
    it('clear', ()=>{
        const m1 = new mySet([1,2])
        m1.clear();
        expect(m1.size).toBe(0);
    })
})

describe('test Sybmol.iterator function-->', () => {
    it('Sybmol.iterator', ()=>{
        const m1 = new mySet([1,2])
        const n = m1[Symbol.iterator]();
        expect(n.next().value).toBe(1);
    })
})