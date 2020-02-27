import axiosMock from '../axios_mock';
import { API_URL } from '../../config';
import * as _actions from '../../actions/team';
import * as _types from '../../constants/team';

const actions = { ..._actions, ..._types };

// Team Loading

describe('actions', () => {
    it('should create an action of type TEAM_LOADING_REQUEST', () => {
        const action = actions.teamLoadingRequest();

        expect(action.type).toEqual(actions.TEAM_LOADING_REQUEST);
    });
});

describe('actions', () => {
    it('should create an action of type TEAM_LOADING_SUCCESS', () => {
        const action = actions.teamLoadingSuccess('team');

        expect(action.type).toEqual(actions.TEAM_LOADING_SUCCESS);
        expect(action.payload).toEqual('team');
    });
});

describe('actions', () => {
    it('should create an action of type TEAM_LOADING_FAILURE', () => {
        const expectedAction = {
            type: actions.TEAM_LOADING_FAILURE,
            payload: 'error that occurred',
        };
        const action = actions.teamLoadingError('error that occurred');
        expect(action.type).toEqual(expectedAction.type);
        expect(action.payload).toEqual(expectedAction.payload);
    });
});

describe('actions', () => {
    it('should despatch TEAM_LOADING_FAILURE with 404', () => {
        const dispatch = dispatched => {
            switch (dispatched.type) {
                case actions.TEAM_LOADING_SUCCESS:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_LOADING_SUCCESS
                    );
                    expect(dispatched.payload).toEqual({
                        data: 'data',
                    });
                    break;
                case actions.TEAM_LOADING_REQUEST:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_LOADING_REQUEST
                    );
                    break;
                default:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_LOADING_FAILURE
                    );
                    expect(dispatched.payload).toEqual(
                        Error('Request failed with status code 404')
                    );
            }
        };
        actions.teamLoading('projectId')(dispatch);
    });
});

describe('actions', () => {
    it('should despatch TEAM_LOADING_SUCCESS and TEAM_LOADING_REQUEST  actions', () => {
        axiosMock.onGet(`${API_URL}/team/projectId/team`).reply(
            200,
            {
                data: 'data',
            },
            {}
        );

        const dispatch = dispatched => {
            switch (dispatched.type) {
                case actions.TEAM_LOADING_SUCCESS:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_LOADING_SUCCESS
                    );
                    expect(dispatched.payload).toEqual({
                        data: 'data',
                    });
                    break;
                case actions.TEAM_LOADING_REQUEST:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_LOADING_REQUEST
                    );
                    break;
                default:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_LOADING_FAILURE
                    );
                    expect(dispatched.payload).toEqual('fail test');
            }
        };
        actions.teamLoading('projectId')(dispatch);
    });
});

// Team create

describe('actions', () => {
    it('should create an action of type TEAM_CREATE_REQUEST', () => {
        const action = actions.teamCreateRequest();

        expect(action.type).toEqual(actions.TEAM_CREATE_REQUEST);
    });
});

describe('actions', () => {
    it('should create an action of type TEAM_CREATE_SUCCESS', () => {
        const action = actions.teamCreateSuccess('team');

        expect(action.type).toEqual(actions.TEAM_CREATE_SUCCESS);
        expect(action.payload).toEqual('team');
    });
});

describe('actions', () => {
    it('should create an action of type TEAM_CREATE_FAILURE', () => {
        const expectedAction = {
            type: actions.TEAM_CREATE_FAILURE,
            payload: 'error that occurred',
        };
        const action = actions.teamCreateError('error that occurred');
        expect(action.type).toEqual(expectedAction.type);
        expect(action.payload).toEqual(expectedAction.payload);
    });
});

describe('actions', () => {
    it('should despatch TEAM_CREATE_FAILURE with 404', () => {
        const dispatch = dispatched => {
            switch (dispatched.type) {
                case actions.TEAM_CREATE_SUCCESS:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_CREATE_SUCCESS
                    );
                    expect(dispatched.payload).toEqual({
                        data: 'data',
                    });
                    break;
                case actions.TEAM_CREATE_REQUEST:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_CREATE_REQUEST
                    );
                    break;
                default:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_CREATE_FAILURE
                    );
                    expect(dispatched.payload).toEqual(
                        Error('Request failed with status code 404')
                    );
            }
        };
        actions.teamCreate('projectId', {})(dispatch);
    });
});

describe('actions', () => {
    it('should despatch TEAM_CREATE_SUCCESS and TEAM_CREATE_REQUEST  actions', () => {
        axiosMock.onPost(`${API_URL}/team/projectId/team`).reply(
            200,
            {
                data: 'data',
            },
            {}
        );

        const dispatch = dispatched => {
            switch (dispatched.type) {
                case actions.TEAM_CREATE_SUCCESS:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_CREATE_SUCCESS
                    );
                    expect(dispatched.payload).toEqual({
                        data: 'data',
                    });
                    break;
                case actions.TEAM_CREATE_REQUEST:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_CREATE_REQUEST
                    );
                    break;
                default:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_CREATE_FAILURE
                    );
                    expect(dispatched.payload).toEqual('fail test');
            }
        };
        actions.teamCreate('projectId', {})(dispatch);
    });
});

// Team delete

describe('actions', () => {
    it('should create an action of type TEAM_DELETE_REQUEST', () => {
        const action = actions.teamDeleteRequest('id');

        expect(action.type).toEqual(actions.TEAM_DELETE_REQUEST);
        expect(action.payload).toEqual('id');
    });
});

describe('actions', () => {
    it('should create an action of type TEAM_DELETE_SUCCESS', () => {
        const action = actions.teamDeleteSuccess('team');

        expect(action.type).toEqual(actions.TEAM_DELETE_SUCCESS);
        expect(action.payload).toEqual('team');
    });
});

describe('actions', () => {
    it('should create an action of type TEAM_DELETE_FAILURE', () => {
        const expectedAction = {
            type: actions.TEAM_DELETE_FAILURE,
            payload: 'error that occurred',
        };
        const action = actions.teamDeleteError('error that occurred');
        expect(action.type).toEqual(expectedAction.type);
        expect(action.payload).toEqual(expectedAction.payload);
    });
});

describe('actions', () => {
    it('should despatch TEAM_DELETE_FAILURE with 404', () => {
        const dispatch = dispatched => {
            switch (dispatched.type) {
                case actions.TEAM_DELETE_SUCCESS:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_DELETE_SUCCESS
                    );
                    expect(dispatched.payload).toEqual({
                        data: 'data',
                    });
                    break;
                case actions.TEAM_DELETE_REQUEST:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_DELETE_REQUEST
                    );
                    break;
                default:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_DELETE_FAILURE
                    );
                    expect(dispatched.payload).toEqual(
                        Error('Request failed with status code 404')
                    );
            }
        };
        actions.teamDelete('projectId', 'teamMemberId')(dispatch);
    });
});

describe('actions', () => {
    it('should despatch TEAM_DELETE_SUCCESS and TEAM_DELETE_REQUEST  actions', () => {
        axiosMock.onDelete(`${API_URL}/team/projectId/team/teamMemberId`).reply(
            200,
            {
                data: 'data',
            },
            {}
        );

        const dispatch = dispatched => {
            switch (dispatched.type) {
                case actions.TEAM_DELETE_SUCCESS:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_DELETE_SUCCESS
                    );
                    expect(dispatched.payload).toEqual({
                        data: 'data',
                    });
                    break;
                case actions.TEAM_DELETE_REQUEST:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_DELETE_REQUEST
                    );
                    break;
                default:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_DELETE_FAILURE
                    );
                    expect(dispatched.payload).toEqual('fail test');
            }
        };
        actions.teamDelete('projectId', 'teamMemberId')(dispatch);
    });
});

// Update Team role

describe('actions', () => {
    it('should create an action of type TEAM_UPDATE_ROLE_REQUEST', () => {
        const action = actions.teamUpdateRoleRequest('id');

        expect(action.type).toEqual(actions.TEAM_UPDATE_ROLE_REQUEST);
        expect(action.payload).toEqual('id');
    });
});

describe('actions', () => {
    it('should create an action of type TEAM_UPDATE_ROLE_SUCCESS', () => {
        const action = actions.teamUpdateRoleSuccess('team');

        expect(action.type).toEqual(actions.TEAM_UPDATE_ROLE_SUCCESS);
        expect(action.payload).toEqual('team');
    });
});

describe('actions', () => {
    it('should create an action of type TEAM_UPDATE_ROLE_FAILURE', () => {
        const expectedAction = {
            type: actions.TEAM_UPDATE_ROLE_FAILURE,
            payload: 'error that occurred',
        };
        const action = actions.teamUpdateRoleError('error that occurred');
        expect(action.type).toEqual(expectedAction.type);
        expect(action.payload).toEqual(expectedAction.payload);
    });
});

describe('actions', () => {
    it('should despatch TEAM_UPDATE_ROLE_FAILURE with 404', () => {
        const dispatch = dispatched => {
            switch (dispatched.type) {
                case actions.TEAM_UPDATE_ROLE_SUCCESS:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_UPDATE_ROLE_SUCCESS
                    );
                    expect(dispatched.payload).toEqual({
                        data: 'data',
                    });
                    break;
                case actions.TEAM_UPDATE_ROLE_REQUEST:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_UPDATE_ROLE_REQUEST
                    );
                    break;
                default:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_UPDATE_ROLE_FAILURE
                    );
                    expect(dispatched.payload).toEqual(
                        Error('Request failed with status code 404')
                    );
            }
        };
        actions.teamUpdateRole('projectId', 'subProjectId', {})(dispatch);
    });
});

describe('actions', () => {
    it('should despatch TEAM_UPDATE_ROLE_SUCCESS and TEAM_UPDATE_ROLE_REQUEST  actions', () => {
        axiosMock
            .onPost(`${API_URL}/team/projectId/team/change-role`)
            .reply(200, { data: 'data' }, {});

        const dispatch = dispatched => {
            switch (dispatched.type) {
                case actions.TEAM_UPDATE_ROLE_SUCCESS:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_UPDATE_ROLE_SUCCESS
                    );
                    expect(dispatched.payload).toEqual({ data: 'data' });
                    break;
                case actions.TEAM_UPDATE_ROLE_REQUEST:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_UPDATE_ROLE_REQUEST
                    );
                    break;
                default:
                    expect(dispatched.type).toEqual(
                        actions.TEAM_UPDATE_ROLE_FAILURE
                    );
                    expect(dispatched.payload).toEqual('fail test');
            }
        };
        actions.teamUpdateRole('projectId', 'subProjectId', {})(dispatch);
    });
});

// Team Paginate
describe('actions', () => {
    it('should dispatch action of type PAGINATE_NEXT', () => {
        const action = actions.paginateNext();
        expect(action.type).toEqual('PAGINATE_NEXT');
    });
});
describe('actions', () => {
    it('should dispatch action of type PAGINATE_PREV', () => {
        const action = actions.paginatePrev();
        expect(action.type).toEqual('PAGINATE_PREV');
    });
});
describe('actions', () => {
    it('should dispatch action of type PAGINATE_RESET', () => {
        const action = actions.paginateReset();
        expect(action.type).toEqual('PAGINATE_RESET');
    });
});

describe('actions', () => {
    it('should dispatch action of type PAGINATE_NEXT', () => {
        const dispatch = dispatched => {
            expect(dispatched.type).toEqual(actions.PAGINATE_NEXT);
        };
        actions.paginate('next')(dispatch);
    });
});
describe('actions', () => {
    it('should dispatch action of type PAGINATE_PREV', () => {
        const dispatch = dispatched => {
            expect(dispatched.type).toEqual(actions.PAGINATE_PREV);
        };
        actions.paginate('prev')(dispatch);
    });
});
describe('actions', () => {
    it('should dispatch action of type PAGINATE_RESET', () => {
        const dispatch = dispatched => {
            expect(dispatched.type).toEqual(actions.PAGINATE_RESET);
        };
        actions.paginate('reset')(dispatch);
    });
});
