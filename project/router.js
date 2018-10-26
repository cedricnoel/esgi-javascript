/**
 * Router object
 */
function Router()
{
    /**
     * @var {*}
     */
    this.routes = []
    /**
     * @var {string}
     */
    this.root = '/'

    this.location = window.location
    
    /**
     * Add a route
     * 
     * @param {string} route 
     * @param {string} method 
     * @param {string} name 
     */
    this.add = (route, method, name) => {
        this.routes[name] = {
            'route': this.root + route,
            'method': method
        }

        return this
    }

    /**
     * Add a route with GET method
     * 
     * @param {string} route 
     * @param {string} method 
     * @param {string} name 
     */
    this.get = (route, name) => {
        this.routes[name] = {
            'route': this.root + route,
            'method': 'GET'
        }

        return this
    }

    /**
     * Add a route with POST method
     * 
     * @param {string} route 
     * @param {string} method 
     * @param {string} name 
     */
    this.post = (route, name) => {
        this.routes[name] = {
            'route': this.root + route,
            'method': 'POST'
        }

        return this
    }

    /**
     * Show routes in console
     */
    this.diaplayRoutes = () => {
        console.log(this.routes)
    }
}

let router = new Router()

router.get('test/', 'test-route').post('zob/', 'zob-route').diaplayRoutes()

console.log(window.location)