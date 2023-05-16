import * as asyncActions from './async-actions'
import * as userDataActions from './userData-actions'
import * as messagesDataActions from './messagesData-actions'

export default {
    ...asyncActions,
    ...userDataActions,
    ...messagesDataActions,
}