import React from 'react';

interface Attempt {
  email: string;
  uuid: string;
  status: string;
}

export default function AttemptTable({ attempts }: { attempts: Attempt[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>UUID</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {attempts.map((a, i) => (
          <tr key={i}>
            <td>{a.email}</td>
            <td>{a.uuid}</td>
            <td>{a.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}