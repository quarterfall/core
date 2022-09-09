import { CloudcheckActionType } from "./CloudcheckActionType";
import { ProgrammingLanguage } from "./ProgrammingLanguage";

export interface PipelineStepOptions {
    language: ProgrammingLanguage;
    // For git action
    gitUrl?: string;
    gitBranch?: string;
    gitPrivateKey?: string;
    gitPath?: string;
    forceOverrideCache?: boolean;
}

export interface PipelineStep {
    action: CloudcheckActionType;
    options: PipelineStepOptions;
}

export interface CloudcheckRequestBody {
    data: any;
    pipeline: PipelineStep[];
}
