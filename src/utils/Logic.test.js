const rewire = require("rewire")
const Logic = rewire("./Logic")
const createBoard = Logic.__get__("createBoard")
const spreadMines = Logic.__get__("spreadMines")
const getNeighbors = Logic.__get__("getNeighbors")
const safeNeighborhood = Logic.__get__("safeNeighborhood")
const fields = Logic.__get__("fields")
const pendding = Logic.__get__("pendding")
// @ponicode
describe("createBoard", () => {
    test("0", () => {
        let param2 = [["group", "status", "phone", "token", "token"], 3.0, ["group", "status", "phone", "token", "token"]]
        let callFunction = () => {
            createBoard([4, 3.0, 0], param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [["group", "status", "phone", "token", "token"], ["group", "status", "phone", "token", "token"], 0]
        let callFunction = () => {
            createBoard([0, 3.0, 30], param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [4, 3.0, ["group", "status", "phone", "token", "token"]]
        let callFunction = () => {
            createBoard([4, 3.0, 30], param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [["group", "status", "phone", "token", "token"], 0, ["group", "status", "phone", "token", "token"]]
        let callFunction = () => {
            createBoard([4, 5, 5], param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [["group", "status", "phone", "token", "token"], 10, 5]
        let callFunction = () => {
            createBoard([0, 4, 4], param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            createBoard(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("spreadMines", () => {
    test("0", () => {
        let param1 = [[9876, 9876, 9876], [12345, "da7588892", 9876], ["bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb", "da7588892"]]
        let callFunction = () => {
            spreadMines(param1, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["bc23a9d531064583ace8f67dad60f6bb", "c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb"], ["c466a48309794261b64a4f02cfcc3d64", 12345, 12345], ["c466a48309794261b64a4f02cfcc3d64", "da7588892", 12345]]
        let callFunction = () => {
            spreadMines(param1, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["da7588892", "da7588892", "c466a48309794261b64a4f02cfcc3d64"], [12345, "c466a48309794261b64a4f02cfcc3d64", "da7588892"], ["da7588892", "da7588892", "bc23a9d531064583ace8f67dad60f6bb"]]
        let callFunction = () => {
            spreadMines(param1, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [[12345, 12345, "c466a48309794261b64a4f02cfcc3d64"], ["bc23a9d531064583ace8f67dad60f6bb", 12345, 12345], ["da7588892", "da7588892", 12345]]
        let callFunction = () => {
            spreadMines(param1, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["bc23a9d531064583ace8f67dad60f6bb", "c466a48309794261b64a4f02cfcc3d64", 12345], [12345, "c466a48309794261b64a4f02cfcc3d64", "c466a48309794261b64a4f02cfcc3d64"], [9876, "da7588892", "bc23a9d531064583ace8f67dad60f6bb"]]
        let callFunction = () => {
            spreadMines(param1, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            spreadMines(undefined, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Logic.createMinedBoard", () => {
    test("0", () => {
        let param2 = [["group", "status", "phone", "token", "token"], 30, 30]
        let callFunction = () => {
            Logic.createMinedBoard(4, param2, 64832)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [["group", "status", "phone", "token", "token"], ["group", "status", "phone", "token", "token"], ["group", "status", "phone", "token", "token"]]
        let callFunction = () => {
            Logic.createMinedBoard(4, param2, 43083)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [["group", "status", "phone", "token", "token"], ["group", "status", "phone", "token", "token"], ["group", "status", "phone", "token", "token"]]
        let callFunction = () => {
            Logic.createMinedBoard(0, param2, 59089)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [["group", "status", "phone", "token", "token"], ["group", "status", "phone", "token", "token"], 10]
        let callFunction = () => {
            Logic.createMinedBoard(10, param2, 59089)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Logic.createMinedBoard(4, [0, 3.0, 10], 64832)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Logic.createMinedBoard(Infinity, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Logic.cloneBoard", () => {
    test("0", () => {
        let param1 = [[12345, 9876, "bc23a9d531064583ace8f67dad60f6bb"], ["bc23a9d531064583ace8f67dad60f6bb", 9876, 12345], ["bc23a9d531064583ace8f67dad60f6bb", "c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb"]]
        let callFunction = () => {
            Logic.cloneBoard(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["bc23a9d531064583ace8f67dad60f6bb", 9876, 12345], ["da7588892", "da7588892", "bc23a9d531064583ace8f67dad60f6bb"], [9876, "bc23a9d531064583ace8f67dad60f6bb", "c466a48309794261b64a4f02cfcc3d64"]]
        let callFunction = () => {
            Logic.cloneBoard(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["da7588892", "bc23a9d531064583ace8f67dad60f6bb", "da7588892"], ["da7588892", "bc23a9d531064583ace8f67dad60f6bb", 9876], ["da7588892", 12345, "da7588892"]]
        let callFunction = () => {
            Logic.cloneBoard(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [[12345, 9876, "c466a48309794261b64a4f02cfcc3d64"], ["c466a48309794261b64a4f02cfcc3d64", 9876, "c466a48309794261b64a4f02cfcc3d64"], ["da7588892", "c466a48309794261b64a4f02cfcc3d64", "da7588892"]]
        let callFunction = () => {
            Logic.cloneBoard(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["da7588892", 12345, 9876], [12345, "c466a48309794261b64a4f02cfcc3d64", 9876], ["da7588892", "bc23a9d531064583ace8f67dad60f6bb", "da7588892"]]
        let callFunction = () => {
            Logic.cloneBoard(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Logic.cloneBoard(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getNeighbors", () => {
    test("0", () => {
        let param1 = [{ length: 64 }, { length: 256 }, { length: 0 }]
        let callFunction = () => {
            getNeighbors(param1, "bar", "token")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [{ length: 32 }, { length: 16 }, { length: 10 }]
        let callFunction = () => {
            getNeighbors(param1, -10, 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [{ length: 64 }, { length: 32 }, { length: 10 }]
        let callFunction = () => {
            getNeighbors(param1, 1, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [{ length: 256 }, { length: 10 }, { length: 32 }]
        let callFunction = () => {
            getNeighbors(param1, 0.0, "status")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [{ length: 10 }, { length: 256 }, { length: 256 }]
        let callFunction = () => {
            getNeighbors(param1, -1, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getNeighbors(undefined, -Infinity, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("safeNeighborhood", () => {
    test("0", () => {
        let callFunction = () => {
            safeNeighborhood(9876, 3.0, "status")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            safeNeighborhood("da7588892", 4, "group")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            safeNeighborhood("bc23a9d531064583ace8f67dad60f6bb", 5, "phone")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            safeNeighborhood("da7588892", 5, "token")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            safeNeighborhood("da7588892", 3.0, "phone")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            safeNeighborhood("", Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Logic.openField", () => {
    test("0", () => {
        let callFunction = () => {
            Logic.openField("c466a48309794261b64a4f02cfcc3d64", 5, "group")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Logic.openField("bc23a9d531064583ace8f67dad60f6bb", 0, "token")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Logic.openField("bc23a9d531064583ace8f67dad60f6bb", 30, "group")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Logic.openField("bc23a9d531064583ace8f67dad60f6bb", 30, "token")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Logic.openField(9876, 0, "phone")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Logic.openField("", NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("fields", () => {
    test("0", () => {
        let callFunction = () => {
            fields("Manager")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            fields("Architect")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            fields("Producer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            fields("Developer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            fields(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Logic.hadExplosion", () => {
    test("0", () => {
        let callFunction = () => {
            Logic.hadExplosion(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Logic.hadExplosion("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Logic.hadExplosion(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Logic.hadExplosion("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Logic.hadExplosion("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Logic.hadExplosion(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("pendding", () => {
    test("0", () => {
        let callFunction = () => {
            pendding({ mined: true, flagged: true, opened: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            pendding({ mined: false, flagged: true, opened: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            pendding({ mined: false, flagged: true, opened: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            pendding({ mined: true, flagged: true, opened: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            pendding({ mined: false, flagged: false, opened: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            pendding(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Logic.wonGame", () => {
    test("0", () => {
        let callFunction = () => {
            Logic.wonGame(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Logic.wonGame(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Logic.wonGame("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Logic.wonGame("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Logic.wonGame("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Logic.wonGame(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Logic.showMines", () => {
    test("0", () => {
        let callFunction = () => {
            Logic.showMines("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Logic.showMines("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Logic.showMines(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Logic.showMines("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Logic.showMines(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Logic.showMines(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Logic.invertFlag", () => {
    test("0", () => {
        let param1 = [["c466a48309794261b64a4f02cfcc3d64", 12345, "bc23a9d531064583ace8f67dad60f6bb"], ["c466a48309794261b64a4f02cfcc3d64", 12345, "c466a48309794261b64a4f02cfcc3d64"], ["da7588892", "bc23a9d531064583ace8f67dad60f6bb", "da7588892"]]
        let callFunction = () => {
            Logic.invertFlag(param1, 4, "status")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [[9876, "da7588892", 12345], ["da7588892", 12345, "c466a48309794261b64a4f02cfcc3d64"], ["bc23a9d531064583ace8f67dad60f6bb", "da7588892", "da7588892"]]
        let callFunction = () => {
            Logic.invertFlag(param1, 30, "phone")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [[9876, 9876, 9876], ["c466a48309794261b64a4f02cfcc3d64", 9876, 9876], ["da7588892", "c466a48309794261b64a4f02cfcc3d64", "c466a48309794261b64a4f02cfcc3d64"]]
        let callFunction = () => {
            Logic.invertFlag(param1, 30, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["c466a48309794261b64a4f02cfcc3d64", "c466a48309794261b64a4f02cfcc3d64", 9876], ["bc23a9d531064583ace8f67dad60f6bb", "c466a48309794261b64a4f02cfcc3d64", 12345], ["c466a48309794261b64a4f02cfcc3d64", "c466a48309794261b64a4f02cfcc3d64", 12345]]
        let callFunction = () => {
            Logic.invertFlag(param1, 4, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["da7588892", 9876, 9876], [9876, 12345, 12345], ["da7588892", 9876, 12345]]
        let callFunction = () => {
            Logic.invertFlag(param1, 5, "group")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Logic.invertFlag(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Logic.flagsUsed", () => {
    test("0", () => {
        let callFunction = () => {
            Logic.flagsUsed(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Logic.flagsUsed(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Logic.flagsUsed("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Logic.flagsUsed("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Logic.flagsUsed("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Logic.flagsUsed(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
