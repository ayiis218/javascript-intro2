const biodata = {
    nama: 'Ayi solahudin',
    age: 21,
    hobbies: ['musik', 'webtoon', 'running'],
    isMaried: false,
    schoolList: [
        {
            name: 'SMKN 1 Kawali',
            yearIn: 2016,
            yearOut: 2019,
            major: 'Software enginering'
        },
        {
            name: 'SMPN 2 Panjalu',
            yearIn: 2013,
            yearOut: 2016,
            major: null
        },
        {
            name: 'SDN 1 Sandingtaman',
            yearIn: 2006,
            yearOut: 2013,
            major: null
        }
    ],
    skill: [
        {
            skillName: 'Javascript',
            level: 'beginner'
        },
        {
            skillName: 'Java',
            level: 'advanced'
        }
    ],
    inteserInCoding: true
}
console.log(`Nama sekolah: ` ,biodata.schoolList[0].name)