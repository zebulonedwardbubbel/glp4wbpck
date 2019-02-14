function testModule() {
    const testVar = {
        testKey: 'the string value of testKey from the staticly imported testModule'
    };
    const message = `This is ${testVar.testKey} logged successfully ✊`;

    console.log(message);
}

export default testModule;
