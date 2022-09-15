import { CloudcheckActionType } from "./CloudcheckActionType";
import { DatabaseDialect } from "./DatabaseDialect";
import { ProgrammingLanguage } from "./ProgrammingLanguage";

export interface PipelineStepOptions {
    language: ProgrammingLanguage;
    // For run code action
    code?: string;
    inputs?: { input?: string }[];
    // For run javascript
    sandbox?: any;
    external?: string[];
    expression?: boolean;
    // For git action
    gitUrl?: string;
    gitBranch?: string;
    gitPrivateKey?: string;
    gitPath?: string;
    forceOverrideCache?: boolean;
    // For webhook action
    webhookUrl?: string;
    // For database action
    databaseDialect?: DatabaseDialect;
    databaseFileUrl?: string;
    // For conditional text
    textOnMatch?: string;
    textOnMismatch?: string;
}

export interface PipelineStep {
    action: CloudcheckActionType;
    options: PipelineStepOptions;
}

export interface CloudcheckRequestBody {
    data: any;
    pipeline: PipelineStep[];
}
