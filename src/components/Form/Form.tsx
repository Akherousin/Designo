'use client';

import { FormEvent, FocusEvent, useReducer, HTMLAttributes } from 'react';
import styles from './Form.module.css';

interface FormAction {
  type: 'change' | 'blur';
  key: string;
  value: string;
}

interface Input {
  as: 'input';
  label: string;
  name: InputNames;
  type: string;
  autoComplete: string;
  inputMode: HTMLAttributes<HTMLElement>['inputMode'];
  error: string;
}

interface Textarea {
  as: 'textarea';
  label: string;
  name: InputNames;
  error: string;
}

type InputNames = keyof typeof initialState;

const initialState = {
  name: {
    value: '',
    showError: false,
  },
  email: {
    value: '',
    showError: false,
  },
  phone: {
    value: '',
    showError: false,
  },
  message: {
    value: '',
    showError: false,
  },
};

function reducer(state: typeof initialState, action: FormAction) {
  switch (action.type) {
    case 'change': {
      return {
        ...state,
        [action.key]: {
          ...state[action.key as keyof typeof state],
          value: action.value,
          showError: false,
        },
      };
    }

    case 'blur': {
      if (action.value === '')
        return {
          ...state,
          [action.key]: {
            ...state[action.key as keyof typeof state],
            showError: true,
          },
        };
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

const INPUTS: (Input | Textarea)[] = [
  {
    label: 'name',
    name: 'name',
    as: 'input',
    type: 'text',
    autoComplete: 'name',
    inputMode: 'text',
    error: "Can't be empty",
  },
  {
    label: 'email address',
    name: 'email',
    as: 'input',
    type: 'email',
    autoComplete: 'email',
    inputMode: 'email',
    error: 'Please use a valid email address',
  },
  {
    label: 'phone',
    name: 'phone',
    as: 'input',
    type: 'text',
    autoComplete: 'tel',
    inputMode: 'tel',
    error: "Can't be empty",
  },

  {
    label: 'your message',
    name: 'message',
    as: 'textarea',
    error: "Can't be empty",
  },
];

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;

    dispatch({ type: 'change', key: target.name, value: target.value });
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;

    dispatch({ type: 'blur', key: target.name, value: target.value });
  };

  return (
    <form
      className={styles.form}
      noValidate
      onSubmit={(e) => e.preventDefault()}
    >
      {INPUTS.map((input) => {
        return (
          <div className={styles.form__field} key={input.label}>
            <label htmlFor={input.name} className="visually-hidden">
              {input.name}
            </label>
            {input.as === 'input' ? (
              <input
                id={input.name}
                name={input.name}
                type={input.type}
                autoComplete={input.autoComplete}
                inputMode={input.inputMode}
                aria-required="true"
                placeholder={input.label}
                onChange={handleChange}
                onBlur={handleBlur}
                value={state[input.name]['value']}
                className={`${styles.input}`}
                aria-describedby={`${input.name}-error`}
                {...(state[input.name]['showError'] && {
                  'aria-invalid': true,
                })}
              />
            ) : (
              <textarea
                id={input.name}
                name={input.name}
                placeholder={input.label}
                aria-required="true"
                onChange={handleChange}
                onBlur={handleBlur}
                value={state[input.name]['value']}
                className={`${styles.input} ${styles.textarea}`}
                aria-describedby={`${input.name}-error`}
                {...(state[input.name]['showError'] && {
                  'aria-invalid': true,
                })}
              />
            )}
            <p
              className={styles.error}
              id={`${input.name}-error`}
              aria-live="assertive"
            >
              {state[input.name]['showError'] && (
                <>
                  {input.name !== 'email' && (
                    <span className="visually-hidden">{input.name} field</span>
                  )}
                  {input.error} <IconError />
                </>
              )}
            </p>
          </div>
        );
      })}
      <button className={styles.button}>submit</button>
    </form>
  );
}

function IconError() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <g fill="none" fillRule="evenodd">
        <circle cx="10" cy="10" r="10" fill="#FFF" />
        <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
      </g>
    </svg>
  );
}

export default Form;
