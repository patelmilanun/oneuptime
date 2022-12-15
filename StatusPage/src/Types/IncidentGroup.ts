import Incident from 'Model/Models/Incident';
import IncidentPublicNote from 'Model/Models/IncidentPublicNote';
import IncidentSeverity from 'Model/Models/IncidentSeverity';
import IncidentState from 'Model/Models/IncidentState';
import IncidentStateTimeline from 'Model/Models/IncidentStateTimeline';
import StatusPageResource from 'Model/Models/StatusPageResource';

export default interface IncidentGroup {
    incident: Incident;
    incidentSeverity: IncidentSeverity;
    publicNote?: IncidentPublicNote | undefined | null;
    incidentState: IncidentState;
    incidentStateTimeline: IncidentStateTimeline;
    incidentResources: Array<StatusPageResource>
}
