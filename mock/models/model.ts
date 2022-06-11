import {Is} from '../../lib';

export class Model {

    /**
     *
     * @param argOne
     * @param test
     */
    @Is.Arguments.Null()
    testSay(argOne: string, test: string = 'test') {
        return argOne;
    }

    /**
     *
     * @param argOne
     * @param test
     */
    // @EachArgument([[Is.Not.Null, Is.Not.Number], Is.String])
    // say(argOne: string, test: string = 'test') {
    //     return argOne;
    // }

}
