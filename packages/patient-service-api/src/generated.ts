/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/integrations/patients": {
    /** @description Endpoint to import a new patient into the Quin platform from a third party system */
    post: operations["PostIntegrationsPatients"];
  };
  "/integrations/patients/{id}": {
    /** @description Endpoint to retrieve a patient */
    get: operations["GetIntegrationsPatient"];
  };
  "/integrations/patients/{id}/practices": {
    /** @description Endpoint to assign a practice to a patient */
    post: operations["PostIntegrationsPatientPractices"];
  };
  "/patients": {
    /** @description Endpoint to create a new patient */
    post: operations["createPatient"];
  };
  "/patients/self": {
    /** @description Endpoint to retrieve patient */
    get: operations["getPatient"];
    put: operations["updateSelf"];
    /** @description Endpoint to delete patient data */
    delete: operations["deletePatient"];
  };
  "/patients/self/practices": {
    /** @description Endpoint used by a patient to assign a practice to themself */
    post: operations["assignPractice"];
  };
  "/branches/self/patients": {
    /** @description Endpoint to get a list of patients for the branch of the logged in employee. */
    get: operations["getPatients"];
  };
  "/branches/self/patients/{patient_id}": {
    /** @description Endpoint for a branch employee to retrieve patient data */
    get: operations["getPatientById"];
    /** @description Endpoint to update patient that belongs to the practice by employee */
    put: operations["updatePracticePatient"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    AssignPracticeRequest: {
      /** Format: uuid */
      practice_id: string;
    };
    /** @description Request to update patient by itself. Should any field be null it will set to null. */
    UpdatePatientSelfRequest: {
      email: string;
      phone_number?: string;
    };
    /**
     * @description Request to update patient by employee/practice. Should any field be null it will set to null.
     * @example {
     *   "first_name": "John",
     *   "last_name": "Doe",
     *   "email": "john.doe@something.com",
     *   "phone_number": 3112345678,
     *   "date_of_birth": "1970-12-20T00:00:00.000Z",
     *   "gender": "MALE"
     * }
     */
    UpdatePracticePatientRequest: {
      first_name: string;
      last_name: string;
      gender: components["schemas"]["Gender"];
      email: string;
      /** Format: date */
      date_of_birth: string;
      phone_number?: string;
      bsn?: string;
    };
    ImportPatient: components["schemas"]["CreatePatientRequest"] & {
      /**
       * @description The Id assigned to the patient as identification of this within the Quin Platform.
       * @example 5a122d18-2fa3-4385-aea9-76344a638940
       */
      patient_id: string;
      /**
       * @description The Practice that the patient is linked with.
       * @example e58ac751-3dd2-4fa2-bd95-6e8cda7d7acd
       */
      practice_id?: string;
      /**
       * @description The identity id given by the IDP to which the user will be linked to.
       * @example 71c31580-6e48-46be-94fa-845bb1d48ed7
       */
      idp_user_id: string;
      /**
       * Format: email
       * @description The email used by the user
       * @example john.doe@something.com
       */
      email: string;
    };
    /**
     * @example {
     *   "first_name": "John",
     *   "last_name": "Doe",
     *   "date_of_birth": "1970-12-20T00:00:00.000Z",
     *   "gender": "MALE"
     * }
     */
    CreatePatientRequest: {
      /** @description Follows guidelines of https://quomdnl.atlassian.net/browse/CAS-8245 */
      first_name: string;
      /** @description Follows guidelines of https://quomdnl.atlassian.net/browse/CAS-8245 */
      last_name: string;
      /** Format: date */
      date_of_birth: string;
      gender: components["schemas"]["Gender"];
    };
    /** @example MALE */
    Gender: string;
    /**
     * @example {
     *   "id": "b3d0e6e6-dba4-4db4-b1e7-f4da8818ec11"
     * }
     */
    CreatePatientResponse: {
      id: string;
    };
    PatientResponse: {
      /**
       * Format: uuid
       * @example g3d0e6e6-dba4-4db4-b1e7-f4da8818ec18
       */
      id: string;
      /** @example John */
      first_name: string;
      /** @example Doe */
      last_name: string;
      /** @example john.doe@something.com */
      email: string;
      /** @example +3112345678 */
      phone_number?: string;
      /**
       * Format: date
       * @example "1970-12-20T00:00:00.000Z"
       */
      date_of_birth: string;
      gender: components["schemas"]["Gender"];
      practice?: components["schemas"]["Practice"];
    };
    PracticePatientResponse: {
      /**
       * Format: uuid
       * @example 9c014272-66ce-4f63-978e-c9a5b0847632
       */
      id: string;
      /** @example John */
      first_name: string;
      /** @example Doe */
      last_name: string;
      /** @example john.doe@something.com */
      email: string;
      /** @example +3112345678 */
      phone_number?: string;
      /**
       * Format: date
       * @example "1970-12-20T00:00:00.000Z"
       */
      date_of_birth: string;
      /** @example 027229932 */
      bsn?: string;
      gender: components["schemas"]["Gender"];
      practice?: components["schemas"]["PracticePatientPractice"];
    };
    /** @description Practice that exists in Quin realm */
    Practice: {
      /** @example Quin */
      name: string;
      /**
       * Format: uuid
       * @example b3d0e6e6-dba4-4db4-b1e7-f4da8818ec12
       */
      id: string;
      address: {
        /** @example Kerkstraat 12 */
        line1: string;
        /** @example 8271AG */
        zip_code: string;
        /** @example Rotterdam */
        city: string;
        /** @example 2nd floor */
        line2?: string;
      };
      /** @example 31643827112 */
      phone_number: string;
    };
    /** @description Practice that exists in Quin realm */
    PracticePatientPractice: {
      /** @example Quin */
      name: string;
      /**
       * Format: uuid
       * @example b3d0e6e6-dba4-4db4-b1e7-f4da8818ec12
       */
      id: string;
    };
    GetPatientsResponse: {
      items: components["schemas"]["PracticePatientResponse"][];
      /** @description Total number of patients in a branch. */
      total: number;
    };
    /** @description Operation failed for a specific reason */
    Error: {
      /**
       * @description A URI reference that uniquely identifies the problem type only in the context of the provided API
       * @example /some/uri-reference/QUIN_ERROR_001
       */
      type: string;
      /**
       * @description Internal error code of the problem
       * @example QUIN_ERROR_001
       */
      title: string;
      /**
       * Format: int32
       * @description The HTTP status code generated by the origin server for this occurrence of the problem
       */
      status: number;
      /** @example some description for the error situation */
      detail?: string;
      /**
       * Format: uri-reference
       * @example /patients
       */
      instance?: string;
    };
  };
  responses: {
    /** @description An error has occurred */
    ErrorResponse: {
      content: {
        "application/problem+json": components["schemas"]["Error"];
      };
    };
  };
  parameters: {
    Offset?: number;
    Limit?: number;
    PatientId: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** @description Endpoint to import a new patient into the Quin platform from a third party system */
  PostIntegrationsPatients: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ImportPatient"];
      };
    };
    responses: {
      /** @description Patient has been created and linked with the given practice (if given) */
      201: {
        content: never;
      };
      /** @description Unauthorised access to the endpoint. */
      401: {
        content: never;
      };
      /** @description Forbidden access to this endpoint. */
      403: {
        content: never;
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** @description Endpoint to retrieve a patient */
  GetIntegrationsPatient: {
    parameters: {
      path: {
        /**
         * @description The patient identification within the Quin platform
         * @example 350b9895-d77f-45cf-885e-4771a62f88aa
         */
        id: string;
      };
    };
    responses: {
      /** @description The patient with the given id exists and this is its information */
      200: {
        content: {
          "application/json": components["schemas"]["PatientResponse"];
        };
      };
      /** @description Unauthorised access to the endpoint. */
      401: {
        content: never;
      };
      /** @description Forbidden access to this endpoint. */
      403: {
        content: never;
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** @description Endpoint to assign a practice to a patient */
  PostIntegrationsPatientPractices: {
    parameters: {
      path: {
        /**
         * @description The patient identification within the Quin platform
         * @example 96c54a36-a1ce-4a6d-bf3a-45f568174693
         */
        id: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["AssignPracticeRequest"];
      };
    };
    responses: {
      /** @description Practice has been assigned to the patient */
      204: {
        content: never;
      };
      /** @description Fields contained in the request are either incorrect or have the wrong format */
      400: {
        content: never;
      };
      /** @description Provided credentials are not sufficient to perform this action */
      401: {
        content: never;
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** @description Endpoint to create a new patient */
  createPatient: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["CreatePatientRequest"];
      };
    };
    responses: {
      /** @description Patient has been created */
      201: {
        content: {
          "application/json": components["schemas"]["CreatePatientResponse"];
        };
      };
      /** @description Fields contained in the request are either incorrect or have the wrong format */
      400: {
        content: never;
      };
      /** @description Provided credentials are not sufficient to perform this action */
      401: {
        content: never;
      };
    };
  };
  /** @description Endpoint to retrieve patient */
  getPatient: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["PatientResponse"];
        };
      };
      /** @description Provided credentials are not sufficient to perform this action */
      401: {
        content: never;
      };
      /** @description The resource you are trying to access does not exist */
      404: {
        content: never;
      };
    };
  };
  updateSelf: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["UpdatePatientSelfRequest"];
      };
    };
    responses: {
      /** @description Patient has been updated successfully */
      204: {
        content: never;
      };
      /** @description Fields contained in the request are either incorrect or have the wrong format */
      400: {
        content: never;
      };
      /** @description Provided credentials are not sufficient to perform this action */
      401: {
        content: never;
      };
      /** @description One of the resources your are trying to use does not exist */
      404: {
        content: never;
      };
    };
  };
  /** @description Endpoint to delete patient data */
  deletePatient: {
    responses: {
      /** @description Patient has been deleted */
      204: {
        content: never;
      };
      /** @description Provided credentials are not sufficient to perform this action */
      401: {
        content: never;
      };
      /** @description The patient cannot be found */
      404: {
        content: never;
      };
    };
  };
  /** @description Endpoint used by a patient to assign a practice to themself */
  assignPractice: {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["AssignPracticeRequest"];
      };
    };
    responses: {
      /** @description Practice has been assigned to the patient */
      204: {
        content: never;
      };
      /** @description Fields contained in the request are either incorrect or have the wrong format */
      400: {
        content: never;
      };
      /** @description Provided credentials are not sufficient to perform this action */
      401: {
        content: never;
      };
    };
  };
  /** @description Endpoint to get a list of patients for the branch of the logged in employee. */
  getPatients: {
    parameters: {
      query?: {
        offset?: components["parameters"]["Offset"];
        limit?: components["parameters"]["Limit"];
        /** @description Search string to look by date of birth in ISO_LOCAL_DATE format (yyyy-MM-dd) */
        date_of_birth?: string;
        /** @description Search string to look by patient's first name */
        first_name?: string;
        /** @description Search string to look by the patient's last name */
        last_name?: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["GetPatientsResponse"];
        };
      };
    };
  };
  /** @description Endpoint for a branch employee to retrieve patient data */
  getPatientById: {
    parameters: {
      path: {
        patient_id: components["parameters"]["PatientId"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["PracticePatientResponse"];
        };
      };
      /** @description Provided credentials are not sufficient to perform this action */
      401: {
        content: never;
      };
      /** @description The resource you are trying to access does not exist */
      404: {
        content: never;
      };
    };
  };
  /** @description Endpoint to update patient that belongs to the practice by employee */
  updatePracticePatient: {
    parameters: {
      path: {
        patient_id: components["parameters"]["PatientId"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["UpdatePracticePatientRequest"];
      };
    };
    responses: {
      /** @description Patient has been updated successfully */
      204: {
        content: never;
      };
      /** @description Fields contained in the request are either incorrect or have the wrong format */
      400: {
        content: never;
      };
      /** @description Provided credentials are not sufficient to perform this action */
      401: {
        content: never;
      };
      /** @description One of the resources your are trying to use does not exist */
      404: {
        content: never;
      };
    };
  };
}
