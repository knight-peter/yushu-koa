function func1() {
    func2()
}

async function func2() {
    try {
        await func3()
    } catch (error) {
        console.log('error')
    }
}

// KOA  Sequelize
// 全局异常处理 异常 Promise Async 回调
// 不同
function func3() {
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            const r = Math.random()
            if(r<0.5){
                reject('error')
            }
        })
    })
}

func1()
