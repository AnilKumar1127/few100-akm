import { strict } from 'assert';

describe('declaring variables', () => {
    describe('using let', () => {
        it('declaring a variable with let', () => {
            let name;

            name = 'Anil';

            expect(name).toBe('Anil');
            expect(typeof (name)).toBe('string');

            name = 1137;

            expect(name).toBe(1137);
            expect(typeof (name)).toBe('number');
        });
        it('explicitly typed', () => {
            let name: string;
            name = 'Anil';
            expect(typeof (name)).toBe('string');
        });
        it('implicitly typed variables', () => {
            let name = 'Anil';
            name = 'Kumar';
            // name = 12345;
            expect(typeof (name)).toBe('string');
        });
    });
});

describe('constants', () => {
    it('has them and prefers them', () => {
        const pi = 3.1415;
        // pi = 3;
        const friends = ['Sean', 'Reggie', 'Sara'];
        // friends = [];
        friends[2] = 'David';
        const movie = { title: 'MadMan', director: 'Not me' };
        // movie ={};
        movie.director = 'its you!!';
        movie.title = 'SAW!';
        expect(movie.title).toBe('SAW!');
        expect(movie.director).toBe('its you!!');

        // const theNew = 'testtests';

        const age = 50;
        expect(age).toBe(50);
    });

    describe('var and why it is evil and you should not use it.', () => {

        it('does not have block scope!', () => {

            const age = 22;

            if (age > 21) {
                // tslint:disable-next-line: no-var-keyword
                var message;
                message = 'Old Enough';
            }

            expect(message).toBe('Old Enough');
        });
    });

    describe('literals', () => {
        it('has a bunch of numeric literals', () => {
            const n1 = 123;
            const n2 = 3.14;
            const bigNumber = 12_123_520;

            const hexNumber = 0xff;
            const binaryNumber = 0b101010101;
            const octNumber = 0o567;

            let x: number;
            x = octNumber;
            expect(x).toBe(375);

            const pay = parseInt('042.83', 10);
            expect(pay).toBe(42);

            const pay2 = parseFloat('42.84');
            expect(pay2).toBe(42.84);

        });
        it('string literals', () => {
            const title = 'Jones';
            // tslint:disable-next-line: quotemark
            expect(title).toBe("Jones");

            const yourName = 'Flannery 0\'Conner';
        });
        it('template string', () => {
            const s1 = 'Tocos';
            expect(typeof (s1)).toBe('string');

            const story = `My life story
            jgfsdjkgkkdfg.`;
            console.log(story);

            const name = 'Bob';
            const age = 45;

            const oldSkool = 'The name is ' + name + ' and the age is ' + age + ' years';
            const newSkool = `The name is ${name} and the age is ${age} years`;
            expect(newSkool).toBe(oldSkool);

        });

        it('has array literals', () => {
            const luckyNumner = [9, 20, 100];
            expect(luckyNumner[0]).toBe(9);
            luckyNumner[999] = 55;

            expect(luckyNumner[100]).toBeUndefined();

            let friends: string[];

            friends = ['Bill', 'Bob'];

            let someArray: (string | number)[];
            someArray = [90, 'Cat', 42];

            let someArray2: (string | number)[];

        });
        it('intro to tuples', () => {
            // type setting = [boolean, string, string, string];
            // let setting: setting;
            // we can do both!!!!!!!!!!!!!
            let setting: [boolean, string, string, string];

            setting = [true, 'log', 'warn', 'trace'];

            // setting = ['dog', false]; // won't comple
            const isSet = setting[0];

            const allowLog = setting[1];

            // Almost like ENums!! But Use this instead of **ENUMS!!**
            type SettingOption = 'log' | 'warn' | 'trace';
            type Setting2 = [boolean, SettingOption, SettingOption, SettingOption];

            let setting2: Setting2;
            setting2 = [true, 'log', 'warn', 'trace'];
        });
    });
    describe('functions literals', () => {
        it('three different ways to declar a function - plus methods in a class we will do later', () => {

            expect(add(10, 2)).toBe(12);
            // below 2 doesnot work here becaus function are not named or declered with return type
            // expect(subtract(10, 2)).toBe(8);
            // expect(multply(10, 2)).toBe(20);


            // name Function
            function add(a: number, b: number): number {
                return a + b;
            }

            // Anonymous Functions
            const subtract = function (a: number, b: number): number {
                return a - b;
            };
            const multply = (a: number, b: number): number => a * b;

            const divide = (a: number, b: number): number => {
                if (b === 0) {
                    throw new Error('Are you tryomg tp open a black hole!!?');
                } else {
                    return a / b;
                }
            };

            expect(add(10, 2)).toBe(12);
            expect(subtract(10, 2)).toBe(8);
            expect(multply(10, 2)).toBe(20);
        });
    });
    describe('object literals', () => {
        it('has them', () => {
            type MPAARating = 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';
            interface Movie {
                title: string;
                director: string;
                yearReleased: number;
                MPAARating?: MPAARating;
                [key: string]: any;
            }
            const movie: Movie = {
                title: 'Thor Ragnork',
                director: 'Taikia waititi',
                yearReleased: 2006,
            };
            expect(movie.title).toBe('Thor Ragnork');

            movie.yearReleased = 2017;
            movie.MPAARating = 'PG-13';
            movie.cast = ['chirs Hemswork', 'Tom Hiddleston'];
            movie.watched = true;
        });
        interface Vehicle {
            vin: string;
            make: string;
            model: string;
            year: number;
        }

        interface Dictionary<T> {
            [key: string]: T;
        }

        const myVehicles: Dictionary<Vehicle> = {
            '83989sjioe': {
                vin: '83989sjioe',
                make: 'Chevy',
                model: 'Bolt',
                year: 2018
            },
            xyzpdq: {
                vin: 'xyzpdq',
                make: 'Honda',
                model: 'Pilot',
                year: 2019
            }

        };

    });

    it('duck typing', () => {
        interface ThingWithMessage {
            message: string;
        }
        function doSomething(thing: ThingWithMessage) {
            console.log(thing.message);
        }
        doSomething({ message: 'call your Mom' });
        const phoneCall = {
            from: 'sue',
            time: 'AM',
            message: 'Call Me Back'
        };
        doSomething(phoneCall);
    });
});
